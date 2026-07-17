/**
 * Build-time generator: reads src/brand/tokens.ts (via generate.ts) and
 * writes the real, downloadable artifacts. Runs automatically before
 * `next dev` and `next build` (see package.json "predev"/"prebuild").
 */
import { mkdirSync, writeFileSync, existsSync, readdirSync, statSync, unlinkSync, createWriteStream, copyFileSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { ZipArchive } from "archiver";
import { buildCSSVariables, buildTailwindSnippet, buildDesignTokensJSON } from "../src/brand/generate";

function write(path: string, content: string) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
  console.log(`  wrote ${path}`);
}

async function zipFontsFolder(fontsDir: string, outPath: string) {
  const files = existsSync(fontsDir) ? readdirSync(fontsDir).filter((f) => statSync(join(fontsDir, f)).isFile()) : [];

  if (files.length === 0) {
    if (existsSync(outPath)) unlinkSync(outPath);
    console.log(`  skipped ${outPath} (no files in ${fontsDir})`);
    return;
  }

  mkdirSync(dirname(outPath), { recursive: true });
  await new Promise<void>((resolvePromise, reject) => {
    const output = createWriteStream(outPath);
    const archive = new ZipArchive({ zlib: { level: 9 } });
    output.on("close", () => resolvePromise());
    archive.on("error", reject);
    archive.pipe(output);
    for (const file of files) {
      archive.file(join(fontsDir, file), { name: file });
    }
    archive.finalize();
  });
  console.log(`  wrote ${outPath} (${files.length} file${files.length === 1 ? "" : "s"})`);
}

async function main() {
  const root = resolve(__dirname, "..");
  const css = buildCSSVariables();

  console.log("Generating brand tokens from src/brand/tokens.ts…");
  write(resolve(root, "src/app/tokens.generated.css"), css);
  write(resolve(root, "public/tokens.css"), css);
  write(resolve(root, "public/tailwind-snippet.css"), buildTailwindSnippet());
  write(resolve(root, "public/design-tokens.json"), buildDesignTokensJSON());
  mkdirSync(resolve(root, "public/brand"), { recursive: true });
  copyFileSync(resolve(root, "src/app/icon.svg"), resolve(root, "public/brand/favicon.svg"));
  console.log("  wrote public/brand/favicon.svg (copied from src/app/icon.svg)");
  await zipFontsFolder(resolve(root, "src/brand/fonts"), resolve(root, "public/fonts.zip"));
  console.log("Done.");
}

main();
