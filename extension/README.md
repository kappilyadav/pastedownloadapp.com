# Paste Download App browser extension

Copy an image, open the extension, press Ctrl+V (Cmd+V on Mac) or tap the paste area, and the image downloads. Everything runs on the device, nothing is uploaded.

## Load it locally (Chrome, Edge, Brave)

1. Open `chrome://extensions` and turn on Developer mode.
2. Click Load unpacked and select this `extension/` folder.
3. Pin the extension, copy an image, click the icon, then press Ctrl+V or Cmd+V.

## Publish

Zip the contents of this folder (so `manifest.json` is at the zip root) and upload it to the Chrome Web Store developer dashboard. The same package works for the Edge Add-ons store.

## Notes

- Only the `clipboardRead` permission is requested.
- The chosen format (PNG, JPEG, WebP) is remembered in the popup's local storage.
