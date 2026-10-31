import { latestArticles, categories } from '../data/articles';
import { author } from '../data/author';
import { locales, localeInfo, homeUrl } from '../i18n/locales';

const site = 'https://pastedownloadapp.com';

export function GET() {
  const articleLine = (a: (typeof latestArticles)[number]) => `- [${a.title}](${site}${a.href}): ${a.description}`;

  const sections = categories.map((c) => {
    const items = latestArticles.filter((a) => a.category === c.slug).map(articleLine);
    return `### ${c.label}\n\n${c.description}\n\n${items.join('\n')}`;
  });

  const languages = locales
    .filter((l) => l !== 'en')
    .map((l) => `- [${localeInfo[l].name}](${homeUrl(l)}): Home page and tool in ${localeInfo[l].name}`);

  const body = `# PasteDownloadApp

> PasteDownloadApp is a free browser-based tool that saves the image on your clipboard, such as a screenshot or a copied picture, as a downloadable PNG, JPEG or WebP file. You press Ctrl+V or Cmd+V (or drag and drop an image file), choose a format, and download. All processing happens locally in the browser with the Clipboard and Canvas APIs. Images are never uploaded to a server. The tool is free and needs no account.

The site is aimed at anyone who needs to turn a copied image or screenshot into a file: students, office workers, designers, developers and support teams. The blog holds measured, step-by-step guides on clipboard behavior, screenshots and image formats, written by ${author.name}, who tests each guide against real files in the live tool.

## Tool

- [Paste and download an image](${site}/): The main tool. Paste or drop an image, pick PNG, JPEG or WebP, and download. The page also contains a how-to, use cases, a format guide, troubleshooting and an FAQ.

## Guides and articles

All guides are listed with categories at [${site}/blog/](${site}/blog/) and [${site}/categories/](${site}/categories/).

${sections.join('\n\n')}

## Company and policies

- [About](${site}/about/): What PasteDownloadApp is, how it works and why it processes everything locally
- [Author](${site}/author/): ${author.name}, ${author.jobTitle}
- [Contact](${site}/contact/): Contact form and email, ${author.email}
- [Privacy Policy](${site}/privacy/): What data is and is not collected, including the browser extension
- [Terms of Service](${site}/terms/): Terms for using the site
- [Cookie Policy](${site}/cookie-policy/): Cookies and consent
- [Disclaimer](${site}/disclaimer/): Disclaimer
- [HTML sitemap](${site}/sitemap/): Every page in one list

## Translations

The home page and tool are available in these languages. Blog articles are English only.

${languages.join('\n')}

## Optional

- [XML sitemap index](${site}/sitemap-index.xml): Canonical list of indexable URLs with last modified dates
- [Source code](https://github.com/kappilyadav/pastedownloadapp.com): Public repository for the website
- [robots.txt](${site}/robots.txt): Crawler access policy
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
