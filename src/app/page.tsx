import { Nav } from "@/components/brand/Nav";
import { CoverSection } from "@/components/brand/sections/CoverSection";
import { LogoSection } from "@/components/brand/sections/LogoSection";
import { ColorsSection } from "@/components/brand/sections/ColorsSection";
import { TypographySection } from "@/components/brand/sections/TypographySection";
import { OrnamentSection } from "@/components/brand/sections/OrnamentSection";
import { ComponentsSection } from "@/components/brand/sections/ComponentsSection";
import { VoiceSection } from "@/components/brand/sections/VoiceSection";
import { MotionSection } from "@/components/brand/sections/MotionSection";
import { AssetsSection } from "@/components/brand/sections/AssetsSection";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Nav />
      <main className="min-w-0 flex-1">
        <CoverSection />
        <LogoSection />
        <ColorsSection />
        <TypographySection />
        <OrnamentSection />
        <ComponentsSection />
        <VoiceSection />
        <MotionSection />
        <AssetsSection />
      </main>
    </div>
  );
}
