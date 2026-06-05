import type { Metadata } from "next";
import { UeberHero } from "@/components/sections/ueber/UeberHero";
import { UeberTimeline } from "@/components/sections/ueber/UeberTimeline";
import { UeberWofuer } from "@/components/sections/ueber/UeberWofuer";
import { UeberLogos } from "@/components/sections/ueber/UeberLogos";
import { UeberValues } from "@/components/sections/ueber/UeberValues";
import { UeberNavCards } from "@/components/sections/ueber/UeberNavCards";
import { UeberFallbeispiel } from "@/components/sections/ueber/UeberFallbeispiel";
import {
  ueberHero,
  ueberTimeline,
  ueberWofuer,
  ueberLogos,
  ueberValues,
  ueberNavCards,
  ueberFallbeispiel,
} from "@/lib/content/ueber-uns";

export const metadata: Metadata = {
  title: "Über uns: Fast Systemmöbel, Meisterbetrieb aus Espelkamp seit 1996",
  description:
    "Vom Garagenstart 1996 zum Meisterbetrieb: Wer hinter Fast Systemmöbel steht, wofür wir stehen und wie wir Möbel nach Maß für Espelkamp und Umgebung planen und fertigen.",
  openGraph: {
    title: "Über uns: Fast Systemmöbel, Meisterbetrieb aus Espelkamp seit 1996",
    description:
      "Vom Garagenstart 1996 zum Meisterbetrieb: Wer hinter Fast Systemmöbel steht, wofür wir stehen und wie wir Möbel nach Maß für Espelkamp und Umgebung planen und fertigen.",
    locale: "de_DE",
    type: "article",
    siteName: "fast.side-boost.com",
  },
};

export default function UeberUnsPage() {
  return (
    <main className="flex flex-col">
      <UeberHero {...ueberHero} />
      <UeberTimeline {...ueberTimeline} />
      <UeberWofuer {...ueberWofuer} />
      <UeberLogos logos={ueberLogos} />
      <UeberValues {...ueberValues} />
      <UeberNavCards cards={ueberNavCards} />
      <UeberFallbeispiel {...ueberFallbeispiel} />
    </main>
  );
}
