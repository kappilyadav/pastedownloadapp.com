export interface UiStrings {
  header: {
    home: string;
    about: string;
    blog: string;
    contact: string;
    categories: string;
    disclaimer: string;
    bookmark: string;
    addToHome: string;
    openMenu: string;
    chooseTheme: string;
    light: string;
    dark: string;
    system: string;
    logoAlt: string;
  };
  paste: {
    title: string;
    subtitle: string;
    autoDownload: string;
    imageFormat: string;
    ariaLabel: string;
    placeholder: string;
    orClick: string;
    accessClipboard: string;
    previewAlt: string;
    download: string;
    clear: string;
    privacy: string;
  };
  stats: {
    unitOne: string;
    unitMany: string;
    levels: string[];
    firstPrompt: string;
    next: string;
    top: string;
    progressLabel: string;
  };
  features: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  howTo: {
    eyebrow: string;
    heading: string;
    intro: string;
    jsonName: string;
    jsonDescription: string;
    toolName: string;
    steps: { title: string; alt: string; body: string }[];
  };
  footer: {
    tagline: string;
    product: string;
    paste: string;
    features: string;
    company: string;
    about: string;
    blog: string;
    author: string;
    categories: string;
    contact: string;
    legal: string;
    privacy: string;
    cookies: string;
    terms: string;
    disclaimer: string;
    rights: string;
    sitemap: string;
    logoAlt: string;
  };
  languages: { label: string };
}

export interface HomeContent {
  meta: { title: string; description: string; keywords: string };
  skip: string;
  hero: {
    badge: string;
    h1: string;
    intro: string;
    navLabel: string;
    nav: { about: string; blog: string; author: string; privacy: string; terms: string; disclaimer: string; contact: string };
  };
  what: { heading: string; body: string };
  clipboard: {
    heading: string;
    intro: string;
    cards: { title: string; body: string }[];
  };
  faq: { heading: string; items: { q: string; a: string }[] };
  webApp: { description: string; featureList: string[] };
}
