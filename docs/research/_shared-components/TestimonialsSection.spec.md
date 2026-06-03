# TestimonialsSection Specification (shared, prop-driven)

- **Target:** `src/components/fast/TestimonialsSection.tsx`
- **Pattern reference:** `src/components/mnm/MnmTestimonials.tsx` (make heading/eyebrow props; reviews are the same 3 constants). Read `docs/research/_SHARED-pages2.md`.
- **Interaction:** static 3-card row.

## Props
```ts
interface TestimonialsSectionProps {
  eyebrow?: string; // default "Sind Sie glücklich, sind wir es auch"
  heading: string;
}
```

## Layout (identical to MnmTestimonials)
- Beige section `py-14 lg:py-[64px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.
- Header centered: eyebrow (Urbanist 14px weight500 letterSpacing 2px uppercase `rgb(61,61,61)`); H2 (Urbanist 65px/65 weight500 -2px `rgb(0,0,0)`, responsive `text-[34px] leading-[1.05] lg:text-[65px] lg:leading-[65px]`, mt 12px, mb 48px).
- 3 cards `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`. Each: bg `rgb(250,250,250)`, padding `50px 40px`, `flex flex-col items-center text-center`. Round avatar `h-20 w-20 rounded-full object-cover overflow-hidden` (next/image 80×80); 5 `StarIcon h-5 w-5` color `rgb(237,168,33)` (mt 20px); quote Urbanist 16px/23.8 weight500 `rgb(102,102,102)` (mt 16px); optional "Read More" (Urbanist 16px `rgb(117,117,117)` underline) for truncated; name Urbanist 20px weight500 `rgb(0,0,0)` (mt 16px).
- Constant reviews:
  1. avatar `/images/2026/03/unnamed-2.png`, "Heftiger Laden!", "Fynn Sudermann", no ReadMore.
  2. avatar `/images/2026/03/unnamed-1.png`, "Klasse Team, hervorragende Arbeit. Kann ich nur jedem empfehlen, der eine individuelle…", ReadMore, "Thorsten Feldhaus".
  3. avatar `/images/testimonial-avatar.png`, "Wir haben vor einem Jahr Möbel für unsere Büroräume anfertigen lassen und sind vollkommen zufrieden…", ReadMore, "Martin K".

## Responsive: single column on mobile.
