# MpProzess Specification

- **Target:** `src/components/moebelplaner/MpProzess.tsx`
- **Pattern reference:** `src/components/mnm/MnmProcess.tsx` — SAME layout (left heading+paragraph+3 dots, right image). Read `docs/research/_SHARED-pages2.md`.
- **Interaction:** static. Beige section, `py-12 lg:py-[46px]`, container `max-w-[1224px] mx-auto px-6 lg:px-8`, Urbanist root.

## Layout — 2 cols (`lg:grid-cols-2 gap-12 items-center`)
- **Left:** H2 `Von der Planung bis zur Montage` (Urbanist 59px/59 weight500 -4px `rgb(23,33,33)`; responsive `text-[32px] leading-[1.05] lg:text-[59px] lg:leading-[59px]`). Paragraph (mt 20px, Urbanist 16px/28 weight500 `rgb(102,102,102)`):
  `Zu allererst planen Sie kostenlos und unverbindlich direkt auf unserer Seite. Im zweiten Schritt melden wir uns bei Ihnen, gehen Ihre Planung gemeinsam durch und klären offene Fragen zu Maßen, Materialien und Konfiguration. Den letzten Schritt übernehmen wir: Fertigung in Espelkamp und Montage durch unser eigenes Team.`
  Then 3 yellow dots (mt 24px).
- **Right:** image `/images/2025/11/20161103_150622294_iOS-scaled.jpg` (alt "Maßgefertigter Einbauschrank"), `object-cover`, `h-[260px] lg:h-[400px] w-full`, square corners.

## Responsive: stack (heading/text/dots, then image) on mobile.
