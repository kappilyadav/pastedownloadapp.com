export const categories = [
  { slug: 'platforms', label: 'Platforms & Browsers', description: 'How clipboard paste and screenshot saving actually behaves on each OS and browser. Chrome, Firefox, Safari, Windows, and Mac all implement the same underlying browser APIs slightly differently, and these guides cover exactly where those differences show up.' },
  { slug: 'troubleshooting', label: 'Troubleshooting & Workflow', description: 'Fixes for clipboard permission errors and faster workflows for converting several images at once. Start here if something in the tool is not behaving the way you expect.' },
  { slug: 'formats', label: 'File Formats & Compression', description: 'PNG, JPG, WebP, SVG, and ICO explained with real file sizes and quality tradeoffs, tested against actual images rather than general advice. Use this section to decide which format fits a specific use case.' }
];

export const latestArticles = [
  {
    href: '/blog/cant-paste-image-check-clipboard/',
    image: '/blog/cant-paste-image-check-clipboard.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/cant-paste-image-check-clipboard.png',
    alt: 'Illustration of three clipboard states: image data that pastes, a file reference that does not, and text that does not',
    title: 'Can\'t Paste an Image? Check What Is Actually on Your Clipboard',
    description: 'When an image will not paste, the clipboard usually holds a file reference or text. Check on Mac, Windows, Linux and in the browser, with real command output.',
    publishDate: '2026-10-18',
    category: 'troubleshooting'
  },
  {
    href: '/blog/paste-image-into-claude-code-terminal/',
    image: '/blog/paste-image-into-claude-code-terminal.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/paste-image-into-claude-code-terminal.png',
    alt: 'Illustration of the Ctrl+V shortcut adding an [Image #1] marker to a terminal AI prompt',
    title: 'How to Paste a Screenshot Into Claude Code and Other Terminal AI Tools',
    description: 'Exact paste keys for Claude Code on Mac, Windows, Linux and WSL, a clipboard check, and fixes for when image paste fails.',
    publishDate: '2026-10-16',
    category: 'troubleshooting'
  },
  {
    href: '/blog/where-do-screenshots-go-on-mac/',
    image: '/blog/where-do-screenshots-go-on-mac.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/where-do-screenshots-go-on-mac.png',
    alt: 'Illustration of the Cmd+Shift+4 shortcut pointing to the Desktop folder where a Mac screenshot file is saved',
    title: 'Where Do Screenshots Go on Mac? How to Find Them and Change the Folder',
    description: 'Mac screenshots save to the Desktop by default, but not always. Find a missing one, change the folder, or rescue a clipboard-only capture.',
    publishDate: '2026-10-01',
    category: 'platforms'
  },
  {
    href: '/blog/convert-png-to-jpg-mac/',
    image: '/blog/convert-png-to-jpg-mac.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/convert-png-to-jpg-mac.png',
    alt: 'Illustration showing a 2.0 MB PNG screenshot converted to a 366 KB JPG',
    title: 'How to Convert a PNG Screenshot to JPG on Mac (4 Ways)',
    description: 'Preview, the Finder Convert Image action, a Terminal default, and a browser tool, with real file sizes.',
    publishDate: '2026-10-01',
    category: 'formats'
  },
  {
    href: '/blog/clipboard-paste-chrome-firefox-safari/',
    image: '/blog/clipboard-paste-chrome-firefox-safari.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/clipboard-paste-chrome-firefox-safari.png',
    alt: 'Screenshot of the paste download tool used to test clipboard behavior across browsers',
    title: 'Why Clipboard Image Paste Behaves Differently in Chrome, Firefox, and Safari',
    description: 'The Clipboard API is not implemented the same way everywhere. Here is what actually differs between browsers.',
    publishDate: '2026-08-22',
    category: 'platforms'
  },
  {
    href: '/blog/mobile-clipboard-android-vs-ios/',
    image: '/blog/mobile-clipboard-android-vs-ios.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/mobile-clipboard-android-vs-ios.png',
    alt: 'Screenshot of the paste download tool in a mobile browser viewport',
    title: 'Saving a Clipboard Image on Android vs iPhone: What Actually Works',
    description: 'Mobile clipboard access does not match desktop. Here is the real difference between Android and iOS browsers.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-29',
    category: 'platforms'
  },
  {
    href: '/blog/access-clipboard-not-working/',
    image: '/blog/access-clipboard-not-working.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/access-clipboard-not-working.png',
    alt: 'Screenshot of the paste tool showing the Access Clipboard button in its default state',
    title: 'Why "Access Clipboard" Fails, and How to Fix It',
    description: 'Clipboard read permission errors explained: browser support, HTTPS requirements, and permission prompts.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-29',
    category: 'troubleshooting'
  },
  {
    href: '/blog/convert-multiple-screenshots-fast/',
    image: '/blog/convert-multiple-screenshots-fast.webp',
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
    image: '/blog/image-compression-quality-settings.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/image-compression-quality-settings.png',
    alt: 'Screenshot of the paste tool showing a WebP conversion result and file size',
    title: 'Image Compression Quality Settings Explained, With Real File Sizes',
    description: 'What a JPEG or WebP quality number actually changes, shown with real before-and-after file sizes.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-29',
    category: 'formats'
  },
  {
    href: '/blog/svg-ico-conversion-quirks/',
    image: '/blog/svg-ico-conversion-quirks.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/svg-ico-conversion-quirks.png',
    alt: 'Screenshot of PasteDownloadApp after converting this site\'s own favicon.svg to a 54.2 KB PNG',
    title: 'SVG and ICO Quirks You Will Hit When Converting Images in a Browser',
    description: 'Vector files and multi-resolution icons do not behave like PNG or JPG. Here is what actually happens when you convert them.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-29',
    category: 'formats'
  },
  {
    href: '/blog/image-for-favicon-social-resume/',
    image: '/blog/image-for-favicon-social-resume.webp',
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
    image: '/blog/why-png-reencode-bigger.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/why-png-reencode-bigger.png',
    alt: 'Screenshot of the paste tool showing a re-encoded PNG result',
    title: 'Why Re-Saving a PNG Can Make the File Bigger, Not Smaller',
    description: 'A browser Canvas re-encode is not the same as a PNG optimizer. Here is the real size difference and why it happens.',
    publishDate: '2026-08-22',
    updatedDate: '2026-09-29',
    category: 'formats'
  },
  {
    href: '/blog/png-vs-jpg-vs-webp/',
    image: '/blog/png-vs-jpg-vs-webp.webp',
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
    image: '/blog/download-copied-image-mac.webp',
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
    image: '/blog/save-screenshot-as-file-windows.webp',
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
    image: '/blog/save-clipboard-image-without-software.webp',
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
    image: '/blog/where-do-clipboard-images-go.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/where-do-clipboard-images-go.png',
    alt: 'Screenshot of the paste tool in its default empty state, showing the Paste image here and Access Clipboard prompt',
    title: 'Where Do Screenshots Go on Windows, Android, and iPhone?',
    description: 'Screenshots and copied images do not behave like normal files until you save them. Here is where they go on Windows, Android, and iPhone.',
    publishDate: '2026-09-27',
    updatedDate: '2026-10-01',
    category: 'platforms'
  },
  {
    href: '/blog/paste-screenshot-into-email-attachment/',
    image: '/blog/paste-screenshot-into-email-attachment.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/paste-screenshot-into-email-attachment.png',
    alt: 'Screenshot of the paste tool with an image pasted in, showing its dimensions, file size, and the Download button',
    title: 'How to Turn a Pasted Screenshot Into an Email Attachment',
    description: 'Gmail and Outlook can paste an image straight into the message body, but that is not the same as an attachment. Here is how to turn a clipboard image into a real file first.',
    publishDate: '2026-09-27',
    updatedDate: '2026-09-29',
    category: 'troubleshooting'
  },
  {
    href: '/blog/why-image-url-wont-download/',
    image: '/blog/why-image-url-wont-download.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/why-image-url-wont-download.png',
    alt: 'Illustration of an image URL that opens in the browser but is blocked by the host with CORS and Referer checks',
    title: "Why Some Image URLs Won't Download (and What to Do Instead)",
    description: 'CORS, hotlink protection, expiring links, and pages that are not images: why an image URL will not download in a tool, and what to do instead.',
    publishDate: '2026-09-27',
    updatedDate: '2026-10-01',
    category: 'troubleshooting'
  },
  {
    href: '/blog/paste-image-into-excel-google-sheets-cell/',
    image: '/blog/paste-image-into-excel-google-sheets-cell.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/paste-image-into-excel-google-sheets-cell.png',
    alt: 'Screenshot of PasteDownloadApp with a pasted illustration of a blue mug, set to JPEG and ready to download as a file for a spreadsheet cell',
    title: 'How to Paste an Image Into an Excel Cell or Google Sheets',
    description: 'Ctrl+V drops a picture on top of your cells, not inside one. Here is how to put an image inside an Excel or Google Sheets cell so it sorts and filters with your data.',
    publishDate: '2026-09-29',
    category: 'troubleshooting'
  },
  {
    href: '/blog/paste-image-into-pdf/',
    image: '/blog/paste-image-into-pdf.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/paste-image-into-pdf.png',
    alt: 'Screenshot of PasteDownloadApp with a pasted 1200 by 500 signature image, ready to download as a PNG file for placing into a PDF',
    title: 'How to Paste an Image Into a PDF on Mac or Windows',
    description: 'How to paste an image into a PDF with Mac Preview, Adobe Acrobat, and Microsoft Word, and what to do when the image is only on your clipboard.',
    publishDate: '2026-09-29',
    category: 'troubleshooting'
  },
  {
    href: '/blog/paste-image-to-search/',
    image: '/blog/paste-image-to-search.webp',
    absoluteImage: 'https://pastedownloadapp.com/blog/paste-image-to-search.png',
    alt: 'Screenshot of PasteDownloadApp with a pasted 1200 by 900 lighthouse illustration, ready to save as a file before running a reverse image search',
    title: 'How to Paste an Image to Search on Google, Bing, and TinEye',
    description: 'Search with a copied image or screenshot without saving it first. How paste-to-search works on Google Lens, Bing Visual Search, and TinEye.',
    publishDate: '2026-09-29',
    category: 'troubleshooting'
  }
];
