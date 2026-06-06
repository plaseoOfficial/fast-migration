# Redirects (301) — Altsite & Kannibalisierung

> **Source of truth:** [Google Sheet](https://docs.google.com/spreadsheets/d/1Jf_zmBGD8pOtzeKDjVX6jP0JkMmrgXGn7QMP9Fnzg5E/edit) Tab 13. Umsetzen in `next.config.ts` `async redirects()` (permanent: true). Trailing-Slash beachten.


| Alte URL | Neue URL | Typ | Anmerkung |
|---|---|---|---|
| `/produkte/kuechen.html` | `/kuechen-nach-mass/` | 301 | Produktkategorie -> Cluster-Pillar |
| `/produkte/ladenbau.html` | `/ladenbau/` | 301 | Produktkategorie -> Cluster-Pillar |
| `/produkte/bueroeinrichtungen.html` | `/bueroeinrichtung/` | 301 | Produktkategorie -> Cluster-Pillar |
| `/produkte/badezimmer.html` | `/badmoebel-nach-mass/` | 301 | Produktkategorie -> Cluster-Pillar |
| `/produkte/einbauschraenke.html` | `/einbauschraenke-nach-mass/` | 301 | Produktkategorie -> Cluster-Pillar |
| `/produkte/hwr.html` | `/hauswirtschaftsraum/` | 301 | Produktkategorie -> Cluster-Pillar |
| `/unternehmen.html` | `/ueber-uns/` | 301 | Trust-Seite |
| `/kontakt.html` | `/kontakt/` | 301 | Trailing Slash + neue Struktur |
| `/datenschutz.html` | `/datenschutz/` | 301 | Pflichtseite |
| `/impressum.html` | `/impressum/` | 301 | Pflichtseite |
| `/agbs.html` | `/agb/` | 301 | Pflichtseite |
| `/jobs.html` | `/ueber-uns/` | 301 | Jobs nicht im SEO-Set -> Trust-Seite (oder /jobs/ neu anlegen) |
| `/unser-standard/qualitaet-nachhaltigkeit.html` | `/ueber-uns/` | 301 | Konsolidieren auf Trust-Seite |
| `/unser-standard/service-beratung.html` | `/ablauf-massanfertigung/` | 301 | Konsolidieren auf Ablauf-Seite |
| `/ratgeber/kueche-planen-schritt-fuer-schritt/` | `/kuechen-nach-mass/kueche-planen/` | 301 | Kannibalisierung aufloesen: Küche planen |
| `/ratgeber/kueche-nach-mass-kosten/` | `/kuechen-nach-mass/kueche-nach-mass-kosten/` | 301 | Kannibalisierung aufloesen: Küche nach Maß Kosten |
| `/ratgeber/kueche-beim-neubau-planen/` | `/kuechen-nach-mass/kueche-im-neubau/` | 301 | Kannibalisierung aufloesen: Küche im Neubau planen / Küche Neubau planen |
| `/ratgeber/massmoebel-kosten-schrank/` | `/einbauschraenke-nach-mass/einbauschrank-kosten/` | 301 | Kannibalisierung aufloesen: Einbauschrank Kosten |
| `/ratgeber/einbauschrank-dachschraege/` | `/einbauschraenke-nach-mass/einbauschrank-dachschraege/` | 301 | Kannibalisierung aufloesen: Einbauschrank Dachschräge |
| `/ratgeber/begehbaren-kleiderschrank-planen/` | `/einbauschraenke-nach-mass/begehbarer-kleiderschrank-nach-mass/` | 301 | Kannibalisierung aufloesen: begehbarer Kleiderschrank (nach Maß / planen) |
| `/bueroeinrichtung/empfangstresen-nach-mass/` | `/ladenbau/empfangstresen-nach-mass/` | 301 | Kannibalisierung aufloesen: Empfangstresen / Empfangstheke nach Maß |
| `/bueroeinrichtung/praxiseinrichtung-nach-mass/` | `/praxiseinrichtung/` | 301 | Kannibalisierung aufloesen: Praxiseinrichtung nach Maß |
| `/ladenbau/gastronomieeinrichtung/` | `/gastronomieeinrichtung/` | 301 | Kannibalisierung aufloesen: Gastronomieeinrichtung nach Maß |
| `/gastronomieeinrichtung/hoteleinrichtung/` | `/serienmoebel/hotelmoebel-serie/` | 301 | Kannibalisierung aufloesen: Hotelmöbel / Hoteleinrichtung |
| `/wohnmoebel-nach-mass/einbauschrank-wohnzimmer-nach-mass/` | `/einbauschraenke-nach-mass/nischenschrank-nach-mass/` | 301 | Kannibalisierung aufloesen: Nischenschrank / Nische Stauraum |
