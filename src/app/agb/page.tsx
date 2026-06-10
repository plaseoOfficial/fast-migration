import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layouts/LegalPageLayout";

export const metadata: Metadata = {
  title: "AGB | Fast Systemmöbel",
  description:
    "AGB der Fast Systemmöbel, Inh. Johann Fast, Espelkamp – Angebot, Preise, Lieferung, Eigentumsvorbehalt und Sachmängelhaftung.",
  alternates: { canonical: "/agb/" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Systemmöbel – Möbel nach Maß aus dem Meisterbetrieb in Espelkamp",
      },
    ],
    title: "AGB | Fast Systemmöbel",
    description: "Allgemeine Geschäftsbedingungen der Fast Systemmöbel.",
    locale: "de_DE",
    type: "website",
    siteName: "Fast Systemmöbel",
  },
};

export default function AgbPage() {
  return (
    <LegalPageLayout title="Allgemeine Geschäftsbedingungen" intro="Fast Systemmöbel">
      <h2>I. Angebot und Vertragsabschluss</h2>
      <p>
        Die vom Kunden unterzeichnete Bestellung ist ein bindendes Angebot. Wir können dieses
        Angebot innerhalb von zwei Wochen durch Zusendung einer Auftragsbestätigung annehmen
        oder innerhalb dieser Frist die bestellte Ware zusenden.
      </p>

      <h2>II. Überlassene Unterlagen</h2>
      <p>
        (1) Prospektangaben, Abbildungen, Produktbeschreibungen etc. sind lediglich als
        annähernd zu betrachten. Zeichnungen, Abbildungen, Maße, Gewichte oder sonstige
        Leistungsdaten sind nur verbindlich, wenn dies ausdrücklich schriftlich vereinbart wird.
        An Kostenvoranschlägen, Zeichnungen und anderen Unterlagen (im Folgenden: Unterlagen)
        behalten wir uns unsere eigentums- und urheberrechtlichen Verwertungsrechte
        uneingeschränkt vor. Unwesentliche und/oder handelsübliche Abweichungen, wie z. B.
        Konstruktionsänderungen im Rahmen der Produktverbesserung, die die Verwendbarkeit nicht
        beeinträchtigen und dem Kunden zumutbar sind, bleiben vorbehalten; wir sind jedoch nicht
        verpflichtet, derartige Änderungen auch an bereits ausgelieferten Produkten vorzunehmen.
      </p>
      <p>
        (2) Soweit wir das Angebot des Kunden nicht innerhalb der Frist von Abschnitt I.
        annehmen, sind diese Unterlagen uns unverzüglich zurückzusenden.
      </p>

      <h2>III. Preise und Zahlungen</h2>
      <p>
        (1) Die Zahlung des Kaufpreises/Werklohnes hat ausschließlich auf unser angegebenes
        Firmenkonto zu erfolgen. Der Abzug von Skonto ist nur bei besonderer schriftlicher
        Vereinbarung zulässig.
      </p>
      <p>
        (2) Die Preise sind €-Preise und gelten ab Geschäftssitz, im Inland zzgl. der jeweils
        geltenden Mehrwertsteuer und sind auf Basis der am Tag unserer Angebotsabgabe geltenden
        Lohn-, Material- und sonstigen Kosten errechnet. Bei einer Steigerung von Material- und
        Rohstoffpreisen, Energiekosten, Löhnen und Gehältern, Herstellungs- oder Transportkosten
        sind wir berechtigt, die sich am Tage der Lieferung in Folge effektiv eingetretener
        Kostensteigerungen ergebenden Preise zu berechnen, es sei denn, die Lieferung erfolgt bei
        einem Nichthandelsgeschäft innerhalb von vier Monaten nach Vertragsabschluss.
      </p>
      <p>
        (3) Unsere Rechnungen sind - sofern nichts anderes vereinbart - sofort ohne Abzug fällig.
        Die Zahlungen sind zu leisten bar frei Zahlstelle. Eine Zahlung gilt erst dann als
        erfolgt, wenn wir über den Betrag verfügen können. Wir sind berechtigt, trotz anders
        lautender Bestimmungen des Kunden Zahlungen zunächst auf dessen ältere Schulden
        anzurechnen, und werden den Kunden über die Art der Verrechnung informieren. Sind bereits
        Kosten und Zinsen entstanden, so sind wir berechtigt, die Zahlungen zunächst auf die
        Kosten, dann auf die Zinsen und zuletzt auf die Hauptleistung anzurechnen.
      </p>
      <p>
        (4) Im Falle des Zahlungsverzugs sind wir unbeschadet weitergehender
        Schadenersatzansprüche berechtigt, Verzugszinsen in Höhe von fünf Prozentpunkten über dem
        jeweiligen Basiszinssatz nach § 247 BGB gegenüber Verbrauchern zu verlangen. Gegenüber
        Kaufleuten beträgt der Verzugszins neun Prozentpunkte über dem jeweiligen Basiszinssatz.
        Kommt der Kunde mit einem nicht unerheblichen Teil der Zahlung in Verzug, so werden unsere
        sämtlichen Forderungen gegen ihn zur sofortigen Zahlung fällig. Dies gilt auch für
        ursprünglich gestundete Rechnungen. Bei Teillieferungen sind wir in dem Fall zur
        Verweigerung aus dem Auftrag noch zu liefernder Waren ohne Schadenersatzpflicht berechtigt.
      </p>
      <p>
        (5) Erfolgen Vorauszahlungen und Sicherheitsleistungen nicht innerhalb angemessener Frist,
        so können wir unbeschadet weitergehender Schadenersatzforderungen vom Vertrag zurücktreten
        oder diesen kündigen.
      </p>
      <p>
        (6) Eine Aufrechnung des Kunden kommt nur mit einer unbestrittenen oder rechtskräftig
        festgestellten Gegenforderung in Betracht. Ein Zurückbehaltungsrecht kann er nur geltend
        machen, soweit es auf Ansprüchen aus demselben Vertragsverhältnis beruht.
      </p>

      <h2>IV. Lieferfristen</h2>
      <p>
        (1) Lieferfristen sind grundsätzlich unverbindlich und beginnen mit Vertragsschluss.
        Verbindlich können sie nur schriftlich vereinbart werden.
      </p>
      <p>
        (2) Die Einhaltung von Fristen für Lieferungen setzt die Einhaltung der vereinbarten
        Zahlungsbedingungen und sonstigen Verpflichtungen durch den Kunden voraus. Verzögert oder
        unterlässt der Kunde seinerseits erforderliche oder vereinbarte Mitwirkungshandlungen,
        verlängert sich die Lieferfrist angemessen.
      </p>
      <p>
        (3) Liefer- und Leistungsverzögerungen aufgrund höherer Gewalt und aufgrund von
        Ereignissen, die uns die Lieferung nicht nur vorübergehend wesentlich erschweren oder
        unmöglich machen - hierzu gehören insbesondere Streik, Aussperrung, behördliche
        Anordnungen, Betriebsstörungen oder Ausfall wichtiger Fertigungseinrichtungen/Maschinen,
        Verzögerungen in Anlieferung der Ware und wesentlicher Rohstoffe, Werkstoff- und/oder
        Energiemangel, etwa auch in Folge wesentlicher Preissteigerungen, Verzögerungen bei der
        Beförderung sowie alle Fälle höherer Gewalt, auch wenn sie bei unseren Lieferanten oder
        deren Unterlieferanten eintreten -, haben wir auch bei verbindlich vereinbarten Fristen
        und Terminen nicht zu vertreten. Vorstehendes gilt auch dann, wenn die vorbezeichneten
        Umstände während eines bereits bestehenden Lieferungsverzugs eintreten. Sie berechtigen
        uns, die Lieferung bzw. Leistung um die Dauer der Behinderung zzgl. einer angemessenen
        Anlaufzeit hinauszuschieben oder wegen des noch nicht erfüllten Teils ganz oder teilweise
        vom Vertrag zurückzutreten. Andere Rücktrittsrechte bleiben unberührt.
      </p>

      <h2>V. Stornierung, Abnahmeverzug</h2>
      <p>
        (1) Storniert der Kunde den Auftrag, gleich aus welchem Grund, ohne dass dies von uns zu
        vertreten ist, haben wir das Recht, vom Kunden eine pauschale Vergütung bzw. einen
        pauschalierten Schadenersatz (Stornierungskosten) zu verlangen, deren Höhe sich in
        Abhängigkeit vom Zeitpunkt der Stornierung zum voraussichtlichen/vereinbarten Liefertermin
        bestimmt: Bis vier Wochen vorher betragen die Stornierungskosten 15 %, und bei weniger als
        vier Wochen 20 % der Nettoauftragssumme. Die Stornierungskosten sind höher oder niedriger
        anzusetzen, wenn wir einen höheren Betrag nachweisen oder der Kunde nachweist, dass eine
        geringere oder überhaupt keine Vergütung, ein geringerer oder überhaupt kein Schaden
        entstanden ist.
      </p>
      <p>
        (2) Der Kunde ist verpflichtet, die Ware innerhalb von sieben Tagen nach Zugang der
        Bereitstellungsanzeige abzunehmen. Im Falle der Nichtabnahme können wir von unserem
        gesetzlichen Rechten Gebrauch machen. Verlangen wir Schadenersatz, so beträgt dieser 20 %
        der Nettoauftragssumme. Der Schadenersatz ist höher oder niedriger anzusetzen, wenn wir
        einen höheren Schaden nachweisen oder der Kunde nachweist, dass ein geringerer oder
        überhaupt kein Schaden entstanden ist.
      </p>

      <h2>VI. Eigentumsvorbehalt</h2>
      <p>
        (1) Die Ware bleibt bis zum Ausgleich der uns zustehenden Forderung unser Eigentum. Ist
        der Kunde Kaufmann im Sinne des HGB, behalten wir uns das Eigentum an allen
        Liefergegenständen bis zum Ausgleich sämtlicher, auch künftiger und bedingter Forderungen
        aus der Geschäftsbeziehung vor.
      </p>
      <p>
        (2) Der Kunde ist nicht berechtigt, unter Eigentumsvorbehalt stehende Waren zu verpfänden
        oder zur Sicherheit zu übereignen. Einwirkungen Dritter auf diese Ware, insbesondere
        Pfändungen sind uns unverzüglich anzuzeigen. Bei Zugriffen Dritter auf die Ware,
        insbesondere Pfändungen, wird der Kunde auf unser Eigentum hinweisen und uns unverzüglich
        benachrichtigen, damit wir unsere Eigentumsrechte durchsetzen können. Soweit der Dritte
        nicht in der Lage ist, uns die in diesem Zusammenhang entstehenden gerichtlichen und
        außergerichtlichen Kosten zu erstatten, haftet hierfür der Kunde.
      </p>
      <p>
        (3) Bei vertragswidrigem Verhalten des Kunden - insbesondere Zahlungsverzug - sind wir
        berechtigt, vom Vertrag zurückzutreten und die Vorbehaltswaren heraus zu verlangen. Der
        Kunde ist bis zur vollständigen Zahlung der Ware verpflichtet, uns jederzeit über deren
        Standort informiert zu halten.
      </p>

      <h2>VII. Sachmängelhaftung</h2>
      <p>
        (1) Die Ware wird frei von Konstruktions-, Fabrikations- und Materialmängeln geliefert;
        die Frist für die Geltendmachung etwaiger Mängelansprüche beträgt - sofern der Kunde kein
        Verbraucher ist - bei neu hergestellten Sachen ein Jahr ab Gefahrübergang. Die Verkürzung
        der Verjährungsfristen nach Satz 1 gilt nicht bei Vorsatz und grober Fahrlässigkeit sowie
        nicht bei Verletzung des Lebens, des Körpers oder der Gesundheit, im Falle der Arglist oder
        im Falle der Übernahme einer Garantie durch uns. In diesen Fällen gilt die gesetzliche
        Verjährungsfrist. Der Verkauf und/oder die Bearbeitung gebrauchter Waren erfolgt - sofern
        der Kunde kein Verbraucher ist - unter Ausschluss jeglicher Sachmängelhaftung. Ist der
        Kunde Verbraucher, beträgt die Verjährungsfrist ein Jahr.
      </p>
      <p>
        (2) Werden unsere Betriebs- oder Wartungsanweisungen sowie Pflegehinweise nicht befolgt,
        Änderungen an der Ware vorgenommen, Teile ausgewechselt oder Verbrauchsmaterialien
        verwendet, die nicht den Originalen entsprechen, so entfallen Ansprüche wegen Mängel der
        Ware, wenn der Kunde eine entsprechende substantiierte Behauptung, dass erst einer dieser
        Umstände den Mangel herbeigeführt hat, nicht widerlegt. Gleiches gilt, soweit Mängel auf
        schlechte Aufstellung schlechter Instandhaltung, Fehlerhafter oder nachlässiger Behandlung
        oder Lagerung, auf von uns nicht ausgeführten unsachgemäßen Reparaturen, Änderungen ohne
        unsere schriftliche Einwilligung, übermäßiger Beanspruchung, ungeeigneten
        Einsatzbedingungen und Betriebsmitteln sowie auch von uns nicht zu vertretenden
        chemischen, elektrochemischen oder elektrischen Einflüssen sowie Witterungs- oder anderen
        Natureinflüssen beruhen. Mängelansprüche kommen schließlich nicht in Betracht bei einer
        unerheblichen Abweichung von der vereinbarten Beschaffenheit, bei unerheblicher
        Beeinträchtigung der Brauchbarkeit, bei natürlicher Abnutzung.
      </p>
      <p>
        (3) Sachmängelansprüche des Kunden - sofern dieser kein Verbraucher ist - setzen voraus,
        dass dieser der ihm nach § 377 HGB obliegenden Untersuchungs- und Rügeobliegenheiten
        ordnungsgemäß nachgekommen ist, ansonsten sind Beanstandungen unbeachtlich: Der Kunde muss
        unserem Kundendienst Mängel unverzüglich, spätestens jedoch innerhalb einer Woche nach
        Erhalt/Eingang der Ware schriftlich mitteilen. Mängel, die auch bei sorgfältiger Prüfung
        innerhalb dieser Frist nicht entdeckt werden können, sind uns unverzüglich nach Entdeckung
        schriftlich bzw. in Textform mitzuteilen.
      </p>
      <p>
        (4) Im Falle einer Mitteilung des Kunden, dass die Ware einen Mangel aufweist, verlangen
        wir nach unserer Wahl und auf unsere Kosten, dass das mangelhafte Teil an unseren
        Firmensitz zur Verfügung gestellt wird. Soweit dies nicht möglich ist, ist der Kunde
        verpflichtet, uns Zugang zu der gelieferten Ware zu gewähren.
      </p>
      <p>
        (5) Der Kunde kann unbeschadet etwaiger Schadenersatzansprüche vom Vertrag zurücktreten
        oder die Vergütung mindern, wenn die Nacherfüllung binnen angemessener Frist fehl schlägt.
      </p>
      <p>
        (6) Ansprüche wegen Mängeln gegen uns stehen nur dem unmittelbaren Kunden zu und sind
        nicht abtretbar.
      </p>
      <p>
        (7) Zahlungen des Kunden dürfen bei Mängelrügen in einem Umfang zurückgehalten werden, der
        in einem angemessenen Verhältnis zu den aufgetretenen Sachmängeln steht. Eine Zahlung kann
        nur zurückgehalten werden, wenn der Kunde eine Mängelrüge geltend macht, über deren
        Berechtigung kein vernünftiger Zweifel bestehen kann. Erfolgt eine Mängelrüge zu Unrecht,
        sind wir berechtigt, die uns entstandenen Aufwendungen vom Kunden ersetzt zu verlangen.
      </p>

      <h2>VIII. Haftung</h2>
      <p>
        (1) Schadenersatz- und Aufwendungsersatzansprüche des Kunden, gleich aus welchem
        Rechtsgrund, insbesondere wegen Verletzung von Pflichten aus dem Schuldverhältnis und aus
        unerlaubter Handlung, sind ausgeschlossen.
      </p>
      <p>
        (2) Dies gilt nicht, wenn zwingend gehaftet wird, z. B. für garantierte
        Beschaffenheitsmerkmale, nach dem Produkthaftungsgesetz, in Fällen des Vorsatzes, der
        groben Fahrlässigkeit wegen der Verletzung des Lebens, des Körpers oder der Gesundheit
        sowie wegen der Verletzung wesentlicher Vertragspflichten. Der Schadenersatzanspruch für
        die Verletzung wesentlicher Vertragspflichten ist jedoch auf den vertragstypischen,
        vorhersehbaren Schaden begrenzt; Ansprüche auf entgangenen Gewinn, ersparte Aufwendungen,
        aus Schadenersatzansprüchen Dritter sowie auf sonstige mittelbare und Folgeschäden können
        nicht verlangt werden. Dies gilt wiederum nicht, wenn ein von uns garantiertes
        Beschaffenheitsmerkmal gerade bezweckt, den Kunden gegen solche Schäden abzusichern
        und/oder soweit Vorsatz oder grobe Fahrlässigkeit vorliegen oder wenn weder der Verletzung
        des Lebens, des Körpers oder der Gesundheit gehaftet wird. Eine Änderung der Beweislast zum
        Nachteil des Kunden ist mit vorstehenden Regelungen nicht verbunden.
      </p>
      <p>
        (3) Soweit unsere Haftung ausgeschlossen oder beschränkt ist, gilt dies auch für unsere
        Angestellten, Arbeitnehmer, Vertreter und Erfüllungsgehilfen.
      </p>

      <h2>IX. Abschließende Bestimmungen</h2>
      <p>
        (1) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder
        öffentlich-rechtliches Sondervermögen, ist Erfüllungsort 32339 Espelkamp und Gerichtsstand
        für alle sich aus dem Vertragsverhältnis ergebenden Streitigkeiten der für unseren
        Firmensitz zuständige Gerichtsort. Wir sind jedoch auch berechtigt, den Kunden an seinem
        allgemeinen Gerichtsstand zu verklagen.
      </p>
      <p>
        (2) Auf alle Verträge findet ausschließlich deutsches Recht unter Ausschluss des
        Übereinkommens der vereinten Nationen über den internationalen Warenkauf (CISG) Anwendung.
      </p>
      <p>
        (3) Soweit in diesen Bedingungen für Mitteilungen oder Erklärungen der Parteien die
        Schriftform vorgesehen ist, wird diese auch durch Übermittlung per Telefax oder per E-Mail
        eingehalten.
      </p>
      <p>
        (4) Sollten einzelne Bestimmungen dieser Bedingungen unwirksam sein, so wird die
        Wirksamkeit der übrigen Bestimmungen davon nicht berührt. Gemeinsam mit dem Kunden werden
        wir etwaige unwirksame Bestimmungen im Rahmen des Zumutbaren nach Treu und Glauben durch
        solche Regelungen ersetzen, die dem wirtschaftlichen Zweck des Vertrags am besten gerecht
        werden, ohne dass dadurch eine wesentliche Änderung des Vertragsinhalts erfolgt. Das
        gleiche gilt, falls es an einer ausdrücklichen Regelung eines regelungsbedürftigen
        Sachverhalts fehlt.
      </p>

      <p>
        <strong>Stand aller Angaben: Juni 2026</strong>
      </p>
    </LegalPageLayout>
  );
}
