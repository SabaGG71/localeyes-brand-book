import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { CodeToggle } from "../CodeToggle";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryLink } from "../SecondaryLink";
import { Eyebrow } from "../Eyebrow";
import { HairlineRule } from "../HairlineRule";
import { CardCream, CardInk } from "../Card";
import { FramedImage } from "../FramedImage";
import { DottedRow } from "../DottedRow";
import { TableDemo } from "../TableDemo";
import { Badge } from "../Badge";
import { FormInput } from "../FormInput";

function Block({ title, children, code }: { title: string; children: React.ReactNode; code: string }) {
  return (
    <div className="rounded-[var(--radius-card)] border hairline border-ink/10 bg-paper p-6">
      <p className="mb-6 font-body text-[11px] font-extrabold uppercase tracking-[0.28em] text-mut">{title}</p>
      <CodeToggle code={code}>{children}</CodeToggle>
    </div>
  );
}

export function ComponentsSection() {
  return (
    <Section id="components" tone="paper-deep">
      <SectionHeader
        eyebrow="Components"
        heading="Built once, reused everywhere."
        description="Every piece here lives in src/components/brand and can be lifted into another project unchanged."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Block
          title="Primary button"
          code={`<PrimaryButton>Explore the work</PrimaryButton>`}
        >
          <PrimaryButton>Explore the work</PrimaryButton>
        </Block>

        <Block
          title="Secondary link"
          code={`<SecondaryLink href="#">Read the case study</SecondaryLink>`}
        >
          <SecondaryLink>Read the case study</SecondaryLink>
        </Block>

        <Block
          title="Eyebrow label"
          code={`<Eyebrow>Section Name</Eyebrow>`}
        >
          <Eyebrow>Section Name</Eyebrow>
        </Block>

        <Block
          title="Section header pattern"
          code={`<Eyebrow>Label</Eyebrow>\n<HairlineRule className="my-4 w-16" />\n<h2 className="font-display font-light text-[length:var(--fs-h2)]">Heading</h2>`}
        >
          <div>
            <Eyebrow tone="gold">Label</Eyebrow>
            <HairlineRule className="my-4 w-16" />
            <h3 className="font-display text-3xl font-light">Heading</h3>
          </div>
        </Block>

        <Block
          title="Card on cream"
          code={`<CardCream eyebrow="Category" title="Card title">Supporting copy.</CardCream>`}
        >
          <CardCream eyebrow="Category" title="Card title">
            Supporting copy sits here, muted and short.
          </CardCream>
        </Block>

        <Block
          title="Card on ink"
          code={`<CardInk eyebrow="Category" title="Card title">Supporting copy.</CardInk>`}
        >
          <CardInk eyebrow="Category" title="Card title">
            Supporting copy sits here, muted and short.
          </CardInk>
        </Block>

        <Block
          title="Framed image mat"
          code={`<FramedImage label="4:5" />`}
        >
          <FramedImage label="4 : 5" />
        </Block>

        <Block
          title="Dotted-leader row"
          code={`<DottedRow label="Minimum size" value="120px" />`}
        >
          <div className="w-full">
            <DottedRow label="Minimum size" value="120px" />
            <DottedRow label="Clear space" value="1.0×" />
          </div>
        </Block>

        <Block
          title="Table"
          code={`<TableDemo />`}
        >
          <TableDemo />
        </Block>

        <Block
          title="Badge / chip"
          code={`<Badge>New</Badge>`}
        >
          <div className="flex gap-3">
            <Badge>New</Badge>
            <Badge>Archived</Badge>
          </div>
        </Block>

        <Block
          title="Form input"
          code={`<FormInput id="email" label="Email" placeholder="you@studio.com" />`}
        >
          <div className="max-w-xs">
            <FormInput id="components-demo-email" label="Email" placeholder="you@studio.com" />
          </div>
        </Block>
      </div>
    </Section>
  );
}
