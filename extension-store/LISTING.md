# Chrome Web Store listing: Paste Download

Everything below is ready to copy into the Chrome Web Store developer dashboard (https://chrome.google.com/webstore/devconsole). The same package also works for Microsoft Edge Add-ons.

## 1. Package

Upload this file: `extension-store/paste-download-app-1.0.0.zip`

It contains only the extension files (manifest, popup, scripts, icons) with `manifest.json` at the zip root.

## 2. Store listing tab

**Name** (from the manifest, 37 of 75 characters)

```
Paste Download: Save Clipboard Images
```

**Summary** (from the manifest, 126 of 132 characters)

```
Copy an image, open the extension, press Ctrl+V or Cmd+V, and it downloads as PNG, JPEG or WebP. Private, nothing is uploaded.
```

**Description**

```
Paste Download turns whatever image is on your clipboard into a file in one step.

Copy an image or take a screenshot to the clipboard, click the extension, then press Ctrl+V (Cmd+V on Mac) or just tap the paste area. Your image downloads right away with a clean, timestamped file name.

HOW IT WORKS
1. Copy an image (right click, Copy Image) or take a screenshot to the clipboard.
2. Open the Paste Download extension.
3. Press Ctrl+V or Cmd+V, or tap the paste area.
4. The image is saved to your Downloads folder.

FEATURES
- One keypress from clipboard to file
- Save as PNG, JPEG or WebP, and your last choice is remembered
- Live preview with dimensions and file size
- Download again or switch formats without pasting twice
- JPEG exports get a clean white background instead of black for transparent images
- Light, dark and system themes that match the Paste Download website

PRIVATE BY DESIGN
- Your images are never uploaded. Everything happens on your device.
- No account, no sign-in, no analytics, no tracking.
- The extension makes no network requests.
- It asks for a single permission, clipboard read access, which is used only when you paste.

WHO IT IS FOR
Anyone who needs to turn a copied image or screenshot into a real image file without opening an editor: writers, developers, designers, support teams, students and anyone who shares screenshots every day.

Paste Download also works as a free web app at https://pastedownloadapp.com, where you can additionally download images from a URL.

Questions or feedback? Visit https://pastedownloadapp.com/contact/ or email hello@pastedownloadapp.com.
```

**Category:** Productivity

**Language:** English (United States)

## 3. Graphic assets

| Field | File |
|---|---|
| Store icon (128x128) | `extension-store/store-icon-128x128.png` |
| Screenshot 1 | `extension-store/screenshots/screenshot-1-1280x800.png` |
| Screenshot 2 | `extension-store/screenshots/screenshot-2-1280x800.png` |
| Screenshot 3 | `extension-store/screenshots/screenshot-3-1280x800.png` |
| Screenshot 4 | `extension-store/screenshots/screenshot-4-1280x800.png` |
| Screenshot 5 | `extension-store/screenshots/screenshot-5-1280x800.png` |
| Small promo tile (440x280) | `extension-store/promo/small-promo-440x280.png` |
| Marquee promo tile (1400x560) | `extension-store/promo/marquee-promo-1400x560.png` |

Screenshots are 1280x800, 24-bit PNG without transparency. Upload them in numerical order, since the first one is the most prominent.

**Official URL / Homepage:** https://pastedownloadapp.com

**Support URL:** https://pastedownloadapp.com/contact/

## 4. Privacy tab

**Single purpose description**

```
Download the image currently on the user's clipboard as a PNG, JPEG or WebP file.
```

**Permission justification: clipboardRead**

```
The extension's only function is to read the image the user has copied and save it as a file. clipboardRead is needed so the popup can read the clipboard image when the user taps the paste area. It is used only on a user action (pressing Ctrl+V or Cmd+V, or tapping the paste area). The image is converted and downloaded locally, and is never stored or sent anywhere.
```

**Host permissions justification:** not applicable, the extension requests no host permissions.

**Are you using remote code?** No. All JavaScript is bundled in the package, and there is no eval or externally loaded script.

**Data usage** (leave every data type unchecked, the extension collects none), then tick all three certifications:
- I do not sell or transfer user data to third parties, outside of the approved use cases.
- I do not use or transfer user data for purposes that are unrelated to my item's single purpose.
- I do not use or transfer user data to determine creditworthiness or for lending purposes.

**Privacy policy URL**

```
https://pastedownloadapp.com/privacy/
```

(The policy has a dedicated "Browser Extension" section. Deploy the site before submitting so that section is live.)

## 5. Distribution tab

- Visibility: Public
- Regions: All regions
- Pricing: Free

## 6. Notes for the reviewer (Test instructions field)

```
No account or login is needed.
1. Open any web page, right click an image and choose Copy Image (or take a screenshot to the clipboard).
2. Click the Paste Download toolbar icon.
3. Press Ctrl+V (Cmd+V on Mac), or tap the paste area and allow clipboard access if asked.
4. The image downloads to the Downloads folder as pasted_YYYYMMDD_HHMMSS.png. Use the PNG / JPEG / WebP selector to change the format.
The extension has no background script, content script or network access. Its only permission is clipboardRead.
```

## 7. Submission checklist

1. Deploy the website so https://pastedownloadapp.com/privacy/ shows the Browser Extension section.
2. Sign in to the developer dashboard (a one-time $5 registration fee applies if the account is new) and create a New item.
3. Upload `paste-download-app-1.0.0.zip`.
4. Fill the Store listing, Privacy and Distribution tabs with the text above and upload the graphics.
5. Submit for review. Reviews typically take from a few hours to a few days.

## 8. Rebuilding the assets

If the popup design changes, regenerate the icons, screenshots, promo tiles and zip with:

```
python3 extension-store/build.py
```

It needs Google Chrome installed and Pillow (`pip3 install pillow`). Bump `version` in `extension/manifest.json` first for any update you upload.
