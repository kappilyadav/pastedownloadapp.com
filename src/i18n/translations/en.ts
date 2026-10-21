import type { UiStrings } from '../types';

export const en: UiStrings = {
  header: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    categories: 'Categories',
    disclaimer: 'Disclaimer',
    bookmark: 'Bookmark',
    addToHome: 'Add to Home Screen',
    openMenu: 'Open menu',
    chooseTheme: 'Choose theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    logoAlt: 'PasteDownloadApp logo'
  },
  paste: {
    title: 'Paste from Clipboard',
    subtitle: 'Press Ctrl+V or ⌘+V to paste an image',
    autoDownload: 'Auto-download',
    imageFormat: 'Image format',
    ariaLabel: 'Paste image here Or click to access clipboard Access Clipboard. Press Ctrl+V to paste an image.',
    placeholder: 'Paste image here',
    orClick: 'Or click to access clipboard',
    accessClipboard: 'Access Clipboard',
    previewAlt: 'Pasted image preview',
    download: 'Download',
    clear: 'Clear',
    privacy: 'Privacy-first: all processing stays in your browser'
  },
  stats: {
    unitOne: 'image saved',
    unitMany: 'images saved',
    levels: ['Clipboard Rookie', 'First Launch', 'Paste Pro', 'Download Streak', 'Screenshot Hero', 'Clipboard Royalty', 'Legend'],
    firstPrompt: 'Paste and download your first image!',
    next: '{n} more to reach {emoji} {name}',
    top: 'Top level reached. You are a legend!',
    progressLabel: 'Progress to next level'
  },
  features: {
    eyebrow: 'Features',
    heading: 'Why use PasteDownload for instant image downloads',
    intro: 'Save clipboard images and convert formats: all in your browser, nothing leaves your device.',
    items: [
      { title: 'Paste from Clipboard', description: 'Use Ctrl+V or Cmd+V to turn copied screenshots, photos, and graphics into downloadable files.' },
      { title: 'Format Conversion', description: 'Convert pasted images between PNG, JPEG, and WebP before saving them to your device.' },
      { title: 'Privacy First', description: 'Clipboard images are processed locally in your browser, so private files stay on your device.' },
      { title: 'Auto Download', description: 'Enable auto-download to save each pasted image immediately. Ideal for quick batches.' },
      { title: 'Drag & Drop', description: 'Drag image files into the paste zone for an instant preview and download options.' }
    ]
  },
  howTo: {
    eyebrow: 'Step by step',
    heading: 'How to save a clipboard image as a file',
    intro: 'Four steps, about a minute. Every screenshot below is the real tool with a real test image.',
    jsonName: 'How to save a clipboard image as a file',
    jsonDescription: 'Copy an image, paste it into PasteDownloadApp, choose PNG, JPEG, or WebP, and download the file. Everything runs in your browser.',
    toolName: 'A web browser',
    steps: [
      {
        title: 'Copy an image',
        alt: 'A sales dashboard screenshot with a dashed red selection box and a number 1 marker, showing the area being copied to the clipboard',
        body: 'Copy any image to your clipboard. Take a screenshot straight to the clipboard with Win+Shift+S on Windows or Cmd+Shift+Ctrl+4 on a Mac, or right-click an image in your browser and choose Copy image. Our test image is a 1600×900 dashboard screenshot.'
      },
      {
        title: 'Paste it into the tool',
        alt: 'The Paste from Clipboard box of PasteDownloadApp with the drop zone circled in red and marked with a number 2',
        body: 'Click the box and press Ctrl+V, or Cmd+V on a Mac. If nothing happens, press Access Clipboard and allow the browser permission prompt. You can also drag an image file onto the box.'
      },
      {
        title: 'Pick a format',
        alt: 'PasteDownloadApp with the pasted dashboard preview and the format menu set to WebP, circled in red and marked with a number 3',
        body: 'PNG is the default. Switch to WebP or JPEG from the menu and the size shows next to the Download button right away. Our test screenshot was 80.1 KB as a source file, came out as 139.0 KB as PNG, 83.8 KB as JPEG, and 40.7 KB as WebP.'
      },
      {
        title: 'Download the file',
        alt: 'PasteDownloadApp with the Download button circled in red and marked with a number 4',
        body: 'Auto-download is on by default, so the file is saved as soon as you paste and again each time you change the format. Untick it if you want to compare formats first, then press Download when you are happy. Files are named pasted_ followed by the date and time.'
      }
    ]
  },
  footer: {
    tagline: 'Paste photos from your clipboard and download instantly. All processing happens in your browser: nothing is uploaded.',
    product: 'Product',
    paste: 'Paste',
    features: 'Features',
    company: 'Company',
    about: 'About',
    blog: 'Blog',
    author: 'Author',
    categories: 'Categories',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    rights: 'All rights reserved.',
    sitemap: 'Sitemap',
    logoAlt: 'PasteDownloadApp logo'
  },
  languages: { label: 'Language' }
};
