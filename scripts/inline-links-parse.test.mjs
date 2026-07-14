// Regressionstest für die Inline-Link-Syntax. Läuft ohne Framework:
//   node --experimental-strip-types scripts/inline-links-parse.test.mjs
import assert from "node:assert/strict";
import { parseInlineLinks, stripInlineLinks } from "../src/lib/inline-links/parse.ts";

// String ohne Marker → unverändert als einzelnes Segment
assert.deepEqual(parseInlineLinks("Nur Text, kein Link."), ["Nur Text, kein Link."]);

// Ein interner Link mitten im Satz
assert.deepEqual(
  parseInlineLinks("Wir planen Ihre [Küche nach Maß](/kuechen-nach-mass/) gleich mit."),
  ["Wir planen Ihre ", { label: "Küche nach Maß", href: "/kuechen-nach-mass/" }, " gleich mit."],
);

// Zwei Links + Umlaute im Anker
assert.deepEqual(
  parseInlineLinks("[Büroeinrichtung](/bueroeinrichtung/) und [Ladenbau](/ladenbau/)."),
  [
    { label: "Büroeinrichtung", href: "/bueroeinrichtung/" },
    " und ",
    { label: "Ladenbau", href: "/ladenbau/" },
    ".",
  ],
);

// Externer Link
assert.deepEqual(
  parseInlineLinks("Im [Möbelplaner](https://moebelplaner.fast-systemmoebel.de/) starten."),
  ["Im ", { label: "Möbelplaner", href: "https://moebelplaner.fast-systemmoebel.de/" }, " starten."],
);

// Fehlgeformte Marker bleiben Literaltext (fail-safe)
assert.deepEqual(parseInlineLinks("Ein [kaputter Marker ohne Ziel."), ["Ein [kaputter Marker ohne Ziel."]);
assert.deepEqual(parseInlineLinks("Klammern [so] ohne Ziel-Teil."), ["Klammern [so] ohne Ziel-Teil."]);

// Leerer String
assert.deepEqual(parseInlineLinks(""), [""]);

// stripInlineLinks: reiner Lesetext
assert.equal(
  stripInlineLinks("Ihre [Küche nach Maß](/kuechen-nach-mass/) aus Espelkamp."),
  "Ihre Küche nach Maß aus Espelkamp.",
);

console.log("inline-links parse: alle Assertions bestanden");
