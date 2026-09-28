export const categories = [
  { slug: 'platforms', label: 'Platforms & Browsers', description: 'How clipboard paste and screenshot saving actually behaves on each OS and browser. Chrome, Firefox, Safari, Windows, and Mac all implement the same underlying browser APIs slightly differently, and these guides cover exactly where those differences show up.' },
  { slug: 'troubleshooting', label: 'Troubleshooting & Workflow', description: 'Fixes for clipboard permission errors and faster workflows for converting several images at once. Start here if something in the tool is not behaving the way you expect.' },
  { slug: 'formats', label: 'File Formats & Compression', description: 'PNG, JPG, WebP, SVG, and ICO explained with real file sizes and quality tradeoffs, tested against actual images rather than general advice. Use this section to decide which format fits a specific use case.' }
];

export const latestArticles = [
  {
    href: '/blog/clipboard-paste-chrome-firefox-safari/',
    image: '/blog/clipboard-paste-chrome-firefox-safari.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/clipboard-paste-chrome-firefox-safari.png',
    alt: 'Screenshot of the paste download tool used to test clipboard behavior across browsers',
    title: 'Why Clipboard Image Paste Behaves Differently in Chrome, Firefox, and Safari',
    description: 'The Clipboard API is not implemented the same way everywhere. Here is what actually differs between browsers.',
    publishDate: '2026-08-22',
    category: 'platforms'
  },
  {
    href: '/blog/mobile-clipboard-android-vs-ios/',
    image: '/blog/mobile-clipboard-android-vs-ios.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/mobile-clipboard-android-vs-ios.png',
    alt: 'Screenshot of the paste download tool in a mobile browser viewport',
    title: 'Saving a Clipboard Image on Android vs iPhone: What Actually Works',
    description: 'Mobile clipboard access does not match desktop. Here is the real difference between Android and iOS browsers.',
    publishDate: '2026-08-22',
    category: 'platforms'
  },
  {
    href: '/blog/access-clipboard-not-working/',
    image: '/blog/access-clipboard-not-working.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/access-clipboard-not-working.png',
    alt: 'Screenshot of the paste tool showing the Access Clipboard button in its default state',
    title: 'Why "Access Clipboard" Fails, and How to Fix It',
    description: 'Clipboard read permission errors explained: browser support, HTTPS requirements, and permission prompts.',
    publishDate: '2026-08-22',
    category: 'troubleshooting'
  },
  {
    href: '/blog/convert-multiple-screenshots-fast/',
    image: '/blog/convert-multiple-screenshots-fast.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/convert-multiple-screenshots-fast.png',
    alt: 'Screenshot of the paste tool with Auto-download enabled and a converted file size shown',
    title: 'How to Convert a Screenshot to JPG (or PNG or WebP)',
    description: 'How to convert a screenshot to JPG in your browser, with real tested file sizes for PNG vs JPEG vs WebP.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-28',
    category: 'formats'
  },
  {
    href: '/blog/image-compression-quality-settings/',
    image: '/blog/image-compression-quality-settings.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/image-compression-quality-settings.png',
    alt: 'Screenshot of the paste tool showing a WebP conversion result and file size',
    title: 'Image Compression Quality Settings Explained, With Real File Sizes',
    description: 'What a JPEG or WebP quality number actually changes, shown with real before-and-after file sizes.',
    publishDate: '2026-08-22',
    category: 'formats'
  },
  {
    href: '/blog/svg-ico-conversion-quirks/',
    image: '/blog/svg-ico-conversion-quirks.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/svg-ico-conversion-quirks.png',
    alt: 'Screenshot of PasteDownloadApp after converting this site\'s own favicon.svg to a 54.2 KB PNG',
    title: 'SVG and ICO Quirks You Will Hit When Converting Images in a Browser',
    description: 'Vector files and multi-resolution icons do not behave like PNG or JPG. Here is what actually happens when you convert them.',
    publishDate: '2026-08-22',
    category: 'formats'
  },
  {
    href: '/blog/image-for-favicon-social-resume/',
    image: '/blog/image-for-favicon-social-resume.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/image-for-favicon-social-resume.png',
    alt: 'Screenshot of an app icon converted to WebP with transparency preserved',
    title: 'Favicon Size Guide: Every Size You Actually Need',
    description: 'What size a favicon actually needs to be, from 16x16 browser tabs to 512x512 PWA icons, plus format and transparency guidance backed by real numbers.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-28',
    category: 'formats'
  },
  {
    href: '/blog/why-png-reencode-bigger/',
    image: '/blog/why-png-reencode-bigger.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/why-png-reencode-bigger.png',
    alt: 'Screenshot of the paste tool showing a re-encoded PNG result',
    title: 'Why Re-Saving a PNG Can Make the File Bigger, Not Smaller',
    description: 'A browser Canvas re-encode is not the same as a PNG optimizer. Here is the real size difference and why it happens.',
    publishDate: '2026-08-22',
    category: 'formats'
  },
  {
    href: '/blog/png-vs-jpg-vs-webp/',
    image: '/blog/png-vs-jpg-vs-webp.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/png-vs-jpg-vs-webp.png',
    alt: 'Three abstract image file cards representing PNG transparency, JPG photos, and WebP compression',
    title: 'PNG vs JPG vs WebP: Real File Sizes Compared',
    description: 'PNG vs JPG vs WebP for quality, transparency, and file size, backed by real measured results, not general claims.',
    publishDate: '2026-06-12',
    updatedDate: '2026-09-28',
    category: 'formats'
  },
  {
    href: '/blog/download-copied-image-mac/',
    image: '/blog/download-copied-image-mac.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/download-copied-image-mac.png',
    alt: 'Minimal laptop illustration showing a copied image being saved as a file on Mac',
    title: 'How to Download a Copied Image on Mac Without Saving to Photos',
    description: 'Save clipboard images from your Mac directly as files without Photos, Preview, or extra steps.',
    publishDate: '2026-06-08',
    updatedDate: '2026-08-22',
    category: 'platforms'
  },
  {
    href: '/blog/save-screenshot-as-file-windows/',
    image: '/blog/save-screenshot-as-file-windows.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/save-screenshot-as-file-windows.png',
    alt: 'Minimal desktop illustration showing a Windows screenshot moving from clipboard to a downloaded file',
    title: 'How to Save a Screenshot Directly as a File Without Opening MS Paint',
    description: 'Turn Print Screen or Snipping Tool captures into PNG or JPG files without opening an editor.',
    publishDate: '2026-06-10',
    updatedDate: '2026-08-22',
    category: 'platforms'
  },
  {
    href: '/blog/save-clipboard-image-without-software/',
    image: '/blog/save-clipboard-image-without-software.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/save-clipboard-image-without-software.png',
    alt: 'Browser and clipboard illustration showing copied images flowing into a downloadable file',
    title: '5 Faster Ways to Save Clipboard Images Without Software',
    description: 'Compare browser-based and built-in methods for saving copied images on desktop and mobile.',
    publishDate: '2026-06-12',
    updatedDate: '2026-08-22',
    category: 'troubleshooting'
  },
  {
    href: '/blog/where-do-clipboard-images-go/',
    image: '/blog/where-do-clipboard-images-go.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/where-do-clipboard-images-go.png',
    alt: 'Screenshot of the paste tool in its default empty state, showing the Paste image here and Access Clipboard prompt',
    title: 'Where Do Screenshots Go? Mac, Windows, Android, and iPhone',
    description: 'Screenshots and copied images do not behave like normal files until you save them. Here is exactly where they go on Mac, Windows, Android, and iPhone.',
    publishDate: '2026-09-27',
    updatedDate: '2026-09-28',
    category: 'platforms'
  },
  {
    href: '/blog/paste-screenshot-into-email-attachment/',
    image: '/blog/paste-screenshot-into-email-attachment.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/paste-screenshot-into-email-attachment.png',
    alt: 'Screenshot of the paste tool with an image pasted in, showing its dimensions, file size, and the Download button',
    title: 'How to Turn a Pasted Screenshot Into an Email Attachment',
    description: 'Gmail and Outlook can paste an image straight into the message body, but that is not the same as an attachment. Here is how to turn a clipboard image into a real file first.',
    publishDate: '2026-09-27',
    category: 'troubleshooting'
  },
  {
    href: '/blog/why-image-url-wont-download/',
    image: '/blog/why-image-url-wont-download.png',
    absoluteImage: 'https://pastedownloadapp.com/blog/why-image-url-wont-download.png',
    alt: 'Screenshot of the URL download tool with an image URL entered and its preview loaded, ready to download',
    title: "Why Some Image URLs Won't Download Directly",
    description: 'CORS, hotlink protection, and referrer blocking explained: why pasting an image URL sometimes fails, and what actually happens when a tool works around it.',
    publishDate: '2026-09-27',
    category: 'troubleshooting'
  }
];
