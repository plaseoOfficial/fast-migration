# FaqSection Specification (shared, prop-driven)

- **Target:** `src/components/fast/FaqSection.tsx` — **Client Component** (`"use client"`).
- **Pattern reference:** `src/components/mnm/MnmFaq.tsx` (make it prop-driven). Read `docs/research/_SHARED-pages2.md`.
- **Interaction:** click accordion, single-open, all closed by default.

## Props
```ts
interface FaqItem { question: string; answer: string }
interface FaqSectionProps {
  eyebrow?: string;   // default "WAS WIR OFT GEFRAGT WERDEN"
  heading: string;
  items: FaqItem[];
  ctaHref?: string;   // default "/faq/"
  ctaLabel?: string;  // default "Zum FAQ"
}
```

## Layout (identical to MnmFaq)
- Beige section, `py-14 lg:py-[64px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.
- Desktop 2-col `lg:grid-cols-2 gap-10 lg:gap-16 items-start`:
  - **Left:** eyebrow (Urbanist 14px, weight500, letterSpacing 2px, uppercase, `rgb(61,61,61)`) → uppercase the eyebrow text; H2 (Urbanist weight500 `rgb(0,0,0)`, `text-[36px] leading-[1.05] lg:text-[56px] lg:leading-[1.0]`, letterSpacing -1px, mt 12px); arrow link `{ctaLabel}` → `{ctaHref}` (Urbanist 20px weight500 black, underline + ArrowRightIcon, mt 32px).
  - **Right:** accordion. Each item: bg `rgb(250,250,250)`, mb 15px, button `flex items-center justify-between p-[30px] pr-[50px]`, question Urbanist 20px weight500 black left, `ArrowRightIcon h-5 w-5 text-[rgb(61,61,61)]` that rotates 90° when open. Open content: padding `0 30px 30px`, answer Urbanist 16px/25 weight500 `rgb(102,102,102)`.
- State: `const [open, setOpen] = useState<number | null>(null)` single-open.

## Responsive: mobile stacks (left block above accordion).
