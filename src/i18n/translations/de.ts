import type { HomeContent, UiStrings } from '../types';

export const de: UiStrings & HomeContent = {
  meta: {
    title: 'Bild aus Zwischenablage speichern | Kopiertes Bild herunterladen',
    description: 'Bild aus der Zwischenablage speichern: Kopiertes Bild oder Screenshot mit Strg+V einfügen und direkt als PNG, JPEG oder WebP herunterladen. Kostenlos, ohne Installation und ohne Upload.',
    keywords: 'Bild aus Zwischenablage speichern, Bild aus der Zwischenablage speichern, Bild kopieren und speichern, Kopiertes Bild speichern, Kopiertes Bild herunterladen, PasteDownload'
  },
  skip: 'Zum Hauptinhalt springen',
  header: {
    home: 'Startseite',
    about: 'Über uns',
    blog: 'Blog',
    contact: 'Kontakt',
    categories: 'Kategorien',
    disclaimer: 'Haftungsausschluss',
    bookmark: 'Lesezeichen',
    addToHome: 'Zum Home-Bildschirm hinzufügen',
    openMenu: 'Menü öffnen',
    chooseTheme: 'Design wählen',
    light: 'Hell',
    dark: 'Dunkel',
    system: 'System',
    logoAlt: 'PasteDownloadApp-Logo'
  },
  paste: {
    title: 'Aus der Zwischenablage einfügen',
    subtitle: 'Drücke Strg+V oder ⌘+V, um ein Bild einzufügen',
    autoDownload: 'Automatisch herunterladen',
    imageFormat: 'Bildformat',
    ariaLabel: 'Bild hier einfügen oder klicken, um auf die Zwischenablage zuzugreifen. Mit Strg+V ein Bild einfügen.',
    placeholder: 'Bild hier einfügen',
    orClick: 'Oder klicken, um auf die Zwischenablage zuzugreifen',
    accessClipboard: 'Zwischenablage öffnen',
    previewAlt: 'Vorschau des eingefügten Bildes',
    download: 'Herunterladen',
    clear: 'Leeren',
    privacy: 'Datenschutz zuerst: Die gesamte Verarbeitung bleibt in deinem Browser'
  },
  stats: {
    unitOne: 'Bild gespeichert',
    unitMany: 'Bilder gespeichert',
    levels: ['Zwischenablage-Neuling', 'Erster Start', 'Einfüge-Profi', 'Download-Serie', 'Screenshot-Held', 'Zwischenablage-Royalty', 'Legende'],
    firstPrompt: 'Füge dein erstes Bild ein und lade es herunter!',
    next: 'Noch {n} bis {emoji} {name}',
    top: 'Höchste Stufe erreicht. Du bist eine Legende!',
    progressLabel: 'Fortschritt bis zur nächsten Stufe'
  },
  features: {
    eyebrow: 'Funktionen',
    heading: 'Warum PasteDownload für schnelle Bild-Downloads',
    intro: 'Bilder aus der Zwischenablage speichern und Formate umwandeln: alles in deinem Browser, nichts verlässt dein Gerät.',
    items: [
      { title: 'Aus der Zwischenablage einfügen', description: 'Mit Strg+V oder Cmd+V werden kopierte Screenshots, Fotos und Grafiken zu Dateien, die du herunterladen kannst.' },
      { title: 'Formatumwandlung', description: 'Wandle eingefügte Bilder in PNG, JPEG oder WebP um, bevor du sie auf deinem Gerät speicherst.' },
      { title: 'Datenschutz zuerst', description: 'Bilder aus der Zwischenablage werden lokal in deinem Browser verarbeitet, private Dateien bleiben auf deinem Gerät.' },
      { title: 'Automatischer Download', description: 'Aktiviere den automatischen Download, um jedes eingefügte Bild sofort zu speichern. Ideal für schnelle Serien.' },
      { title: 'Drag & Drop', description: 'Ziehe Bilddateien in den Einfügebereich für eine sofortige Vorschau und Download-Optionen.' }
    ]
  },
  howTo: {
    eyebrow: 'Schritt für Schritt',
    heading: 'So speicherst du ein Bild aus der Zwischenablage als Datei',
    intro: 'Vier Schritte, etwa eine Minute. Alle Screenshots unten zeigen das echte Tool mit einem echten Testbild.',
    jsonName: 'So speicherst du ein Bild aus der Zwischenablage als Datei',
    jsonDescription: 'Bild kopieren, in PasteDownloadApp einfügen, PNG, JPEG oder WebP wählen und die Datei herunterladen. Alles läuft in deinem Browser.',
    toolName: 'Ein Webbrowser',
    steps: [
      {
        title: 'Bild kopieren',
        alt: 'Screenshot eines Vertriebs-Dashboards mit rot gestricheltem Auswahlrahmen und der Markierung 1, der den in die Zwischenablage kopierten Bereich zeigt',
        body: 'Kopiere ein beliebiges Bild in die Zwischenablage. Einen Screenshot legst du unter Windows mit Win+Umschalt+S, auf dem Mac mit Cmd+Umschalt+Ctrl+4 direkt in die Zwischenablage. Im Browser klickst du ein Bild mit der rechten Maustaste an und wählst „Bild kopieren“.'
      },
      {
        title: 'In das Tool einfügen',
        alt: 'Das Feld „Aus der Zwischenablage einfügen“ von PasteDownloadApp mit rot eingekreistem Ablagebereich und der Markierung 2',
        body: 'Klicke in das Feld und drücke Strg+V, auf dem Mac Cmd+V. Passiert nichts, klicke auf „Zwischenablage öffnen“ und erlaube die Berechtigungsabfrage des Browsers. Du kannst auch eine Bilddatei in das Feld ziehen.'
      },
      {
        title: 'Format auswählen',
        alt: 'PasteDownloadApp mit Vorschau des eingefügten Dashboards und auf WebP gestelltem Formatmenü, rot eingekreist und mit der Markierung 3',
        body: 'PNG ist voreingestellt. Wechselst du im Menü zu WebP oder JPEG, erscheint die Dateigröße sofort neben der Schaltfläche „Herunterladen“. PNG eignet sich für Transparenz, JPEG für maximale Kompatibilität und WebP für die kleinste Datei.'
      },
      {
        title: 'Datei herunterladen',
        alt: 'PasteDownloadApp mit rot eingekreister Schaltfläche „Herunterladen“ und der Markierung 4',
        body: 'Der automatische Download ist standardmäßig aktiv: Die Datei wird beim Einfügen gespeichert und bei jedem Formatwechsel erneut. Deaktiviere ihn, wenn du erst Formate vergleichen möchtest, und klicke danach auf „Herunterladen“. Die Dateien heißen pasted_ gefolgt von Datum und Uhrzeit.'
      }
    ]
  },
  footer: {
    tagline: 'Füge Fotos aus der Zwischenablage ein und lade sie sofort herunter. Die gesamte Verarbeitung erfolgt in deinem Browser: Es wird nichts hochgeladen.',
    product: 'Produkt',
    paste: 'Einfügen',
    features: 'Funktionen',
    company: 'Unternehmen',
    about: 'Über uns',
    blog: 'Blog',
    author: 'Autor',
    categories: 'Kategorien',
    contact: 'Kontakt',
    legal: 'Rechtliches',
    privacy: 'Datenschutzerklärung',
    cookies: 'Cookie-Richtlinie',
    terms: 'Nutzungsbedingungen',
    disclaimer: 'Haftungsausschluss',
    rights: 'Alle Rechte vorbehalten.',
    sitemap: 'Sitemap',
    logoAlt: 'PasteDownloadApp-Logo'
  },
  languages: { label: 'Sprache' },
  hero: {
    badge: 'Datenschutz zuerst · 100 % im Browser',
    h1: 'Bild aus Zwischenablage speichern: Kopiertes Bild direkt herunterladen',
    intro: 'Bild kopieren, Strg+V drücken und als PNG, JPEG oder WebP herunterladen. PasteDownload ist ein kostenloses, privates Tool, das ein kopiertes Bild, ein Bild aus der Zwischenablage, einen Screenshot oder eine gezogene Datei ohne Installation direkt als Datei auf deinem Gerät speichert.',
    navLabel: 'Informationsseiten',
    nav: { about: 'Über uns', blog: 'Blog', author: 'Autor', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', disclaimer: 'Haftungsausschluss', contact: 'Kontakt' }
  },
  what: {
    heading: 'Was ist PasteDownload?',
    body: 'PasteDownload (pastedownloadapp.com) ist ein kostenloses Online-Tool, mit dem du ein Bild aus der Zwischenablage speichern kannst. Kopiere ein beliebiges Bild, füge es in das Feld ein und lade es als PNG-, JPEG- oder WebP-Datei herunter. Alles läuft in deinem Browser: Du musst nichts installieren, und deine Bilder werden nie hochgeladen.'
  },
  clipboard: {
    heading: 'Kopierte Bilder aus der Zwischenablage herunterladen',
    intro: 'Die meisten Bilder, die du kopierst, werden nie zu einer Datei. Sie bleiben in der Zwischenablage, bis du etwas anderes kopierst. PasteDownload macht daraus in einem Schritt eine echte Datei, sodass du ein kopiertes Bild speichern kannst.',
    cards: [
      { title: 'Einfügen und herunterladen', body: 'Drücke Strg+V (Cmd+V auf dem Mac) im Feld, und das Bild wird sofort als Datei gespeichert. Ohne Upload, ohne Konto und bei aktivem automatischem Download ohne zusätzlichen Klick.' },
      { title: 'Kopiertes Bild speichern', body: 'Klicke ein Bild mit der rechten Maustaste an, wähle „Bild kopieren“ und füge es hier ein. Das funktioniert mit Webfotos, Chat-Bildern sowie Bildern aus Dokumenten und Folien.' },
      { title: 'Zwischenablage zu PNG, JPG oder WebP', body: 'Wandle das Bild aus der Zwischenablage beim Herunterladen in das gewünschte Format um: PNG für Transparenz, JPEG für Kompatibilität oder WebP für die kleinste Datei.' }
    ]
  },
  faq: {
    heading: 'Häufig gestellte Fragen',
    items: [
      { q: 'Wie kann ich ein Bild aus der Zwischenablage speichern?', a: 'Kopiere das Bild mit „Bild kopieren“ oder einer Screenshot-Tastenkombination, öffne PasteDownload, klicke in das Einfügefeld und drücke Strg+V (Cmd+V auf dem Mac). Das Bild erscheint sofort in der Vorschau und wird als PNG-, JPEG- oder WebP-Datei gespeichert.' },
      { q: 'Wie lade ich ein kopiertes Bild herunter?', a: 'Füge das kopierte Bild einfach in das Feld ein. Ist der automatische Download aktiv, wird die Datei im Moment des Einfügens gespeichert. Möchtest du zuerst ein Format wählen, deaktiviere ihn und klicke danach auf „Herunterladen“.' },
      { q: 'Kann ich ein Bild aus der Zwischenablage auch auf dem Smartphone speichern?', a: 'Ja. Tippe auf „Zwischenablage öffnen“, erteile die Berechtigung und füge das Bild ein. Reagiert die Schaltfläche nicht, importiere das Bild aus der Galerie oder dem Dateimanager. Android und iOS gehen mit dieser Berechtigung unterschiedlich um.' },
      { q: 'Warum fügt Strg+V mein Bild nicht ein?', a: 'Meist enthält die Zwischenablage keine Bilddaten, zum Beispiel weil du nur einen Link kopiert hast. Es kann auch sein, dass das Einfügefeld noch keinen Fokus hat oder dein Browser strengere Berechtigungsregeln anwendet.' },
      { q: 'Kann ich ein eingefügtes Bild in ein anderes Format umwandeln?', a: 'Ja. Füge ein Bild aus der Zwischenablage ein oder ziehe eine Datei hinein und lade sie als PNG, JPEG oder WebP herunter. Die Umwandlung erfolgt lokal in deinem Browser mit der Canvas-API.' },
      { q: 'Wird mein Bild auf einen Server hochgeladen?', a: 'Nein. Das Auslesen der Bilddaten mit der Clipboard-API und die Umwandlung mit der Canvas-API passieren vollständig auf deinem Gerät. Dein Bild wird nirgendwohin gesendet.' },
      { q: 'Ist PasteDownload kostenlos?', a: 'Ja. Das Tool ist kostenlos, ohne Registrierung, ohne Wasserzeichen und ohne Nutzungslimit.' },
      { q: 'Funktioniert das auch mit Bildern, die ich aus einer PDF kopiere?', a: 'Das hängt von deinem PDF-Programm ab. Kannst du ein eingebettetes Bild mit der rechten Maustaste über „Bild kopieren“ kopieren, lässt es sich normal einfügen. Sonst hilft ein Screenshot der PDF-Seite.' }
    ]
  },
  webApp: {
    description: 'PasteDownload ist ein kostenloses Online-Tool, um ein Bild aus der Zwischenablage zu speichern. Kopierte Bilder und Screenshots lassen sich als PNG, JPEG oder WebP herunterladen, die Verarbeitung erfolgt privat im Browser.',
    featureList: [
      'Kopiertes Bild mit Strg+V oder Cmd+V einfügen und speichern',
      'Bild aus der Zwischenablage als PNG, JPEG oder WebP herunterladen',
      'Eingefügte Bilder in PNG, JPEG oder WebP umwandeln',
      'Verarbeitung im Browser, es wird nichts hochgeladen',
      'Automatischer Download speichert jedes eingefügte Bild sofort',
      'Bilddateien per Drag & Drop in den Einfügebereich ziehen'
    ]
  }
};
