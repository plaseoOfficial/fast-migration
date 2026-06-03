# ServiceHero Specification (shared, prop-driven)

- **Target:** `src/components/fast/ServiceHero.tsx`
- **Pattern reference:** `src/components/mnm/MnmHero.tsx` (copy its structure, parameterize). Read `docs/research/_SHARED-pages2.md`.
- **Interaction:** static.

## Props
```ts
interface BreadcrumbItem { label: string; href?: string } // last item: no href (current)
interface ServiceHeroProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  bgImage: string;            // /images/...
  intro?: string;             // optional right-column paragraph
  cta?: { label: string; href: string }; // optional yellow PILL button under the title
}
```

## Layout (same as MnmHero)
- `<section className="relative isolate w-full overflow-hidden min-h-[520px] lg:min-h-[638px] flex items-end pt-[140px] lg:pt-[230px] pb-14">` with Urbanist font on root.
- `next/image` `fill object-cover` (z-0) of `bgImage`, then gradient overlay `absolute inset-0 z-[1]` `linear-gradient(90deg, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.14) 45%, rgba(0,0,0,0) 70%)`, then content `relative z-10` in container `max-w-[1224px] mx-auto px-6 lg:px-8`.
- Inside: `flex flex-col lg:flex-row lg:items-end lg:gap-8`.
  - **Left** (`lg:w-[66%]`): H1 (Urbanist 70px/84, weight 500, -3px, white; responsive `text-[34px] leading-[1.1] sm:text-[44px] lg:text-[70px] lg:leading-[84px]`). If `cta`: a yellow pill below H1 (margin-top 24px) — `inline-flex items-center rounded-[50px] bg-[rgb(237,168,33)] px-5 py-2.5 text-[15px] font-medium text-[rgb(61,61,61)] hover:bg-[rgb(61,61,61)] hover:text-[rgb(237,168,33)] transition-colors` (use Poppins font on this pill via `style fontFamily var(--font-poppins)...`). Then breadcrumb (margin-top 16px): items joined by `ChevronRightIcon h-3 opacity-60`, each `text-[15px] leading-[26px] text-white/70 hover:text-white`; last item bold white `font-bold text-white`.
  - **Right** (`mt-6 lg:mt-0 lg:w-[30%]`): if `intro`, a `<p>` Urbanist 15px/23.8 weight500 color `rgba(255,255,255,0.7)`.

## Responsive
- Mobile: single column; reduce pt to `pt-[140px]`, min-h `min-h-[480px]`.
