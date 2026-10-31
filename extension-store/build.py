#!/usr/bin/env python3
"""Builds everything needed for the Chrome Web Store listing.

Run from anywhere: python3 extension-store/build.py
Outputs: extension/icons, extension-store/screenshots, extension-store/promo, the upload zip.
"""
import base64
import html
import json
import os
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
EXT = ROOT / 'extension'
STORE = ROOT / 'extension-store'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
VERSION = json.loads((EXT / 'manifest.json').read_text())['version']

INK = (23, 23, 23)
WHITE = (255, 255, 255)


def draw_glyph(d, k, cx, cy, width):
  """Draws the logo glyph centered at cx, cy; k is pixels per unit of the 24 unit icon box."""
  def p(x, y):
    return (cx + (x - 12) * k, cy + (y - 12) * k)

  h = width / 2
  (x0, y0), (x1, y1) = p(3, 3), p(21, 21)
  d.rounded_rectangle([x0 - h, y0 - h, x1 + h, y1 + h], radius=2.5 * k + h, outline=WHITE, width=width)
  mx, my = p(8.5, 8.5)
  r = 1.6 * k
  d.ellipse([mx - r, my - r, mx + r, my + r], fill=WHITE)
  pts = [p(21, 15), p(16, 10), p(5, 21)]
  d.line(pts, fill=WHITE, width=width, joint='curve')
  for x, y in (pts[0], pts[2]):
    d.ellipse([x - width / 2, y - width / 2, x + width / 2, y + width / 2], fill=WHITE)


def make_icon(size, art, supersample=8):
  """Black tile of `art` px centered in a transparent `size` square, with a large glyph."""
  s = size * supersample
  a = art * supersample
  off = (s - a) / 2
  tile = Image.new('RGBA', (a, a), INK + (255,))
  d = ImageDraw.Draw(tile)
  k = a * 0.80 / 20.3
  stroke = max(2, round(2.3 * k))
  draw_glyph(d, k, a / 2, a / 2, stroke)
  mask = Image.new('L', (a, a), 0)
  ImageDraw.Draw(mask).rounded_rectangle([0, 0, a - 1, a - 1], radius=a * 0.22, fill=255)
  im = Image.new('RGBA', (s, s), (0, 0, 0, 0))
  im.paste(tile, (round(off), round(off)), mask)
  return im.resize((size, size), Image.LANCZOS)


def build_icons():
  for size in (16, 32, 48):
    make_icon(size, size).save(EXT / 'icons' / f'icon-{size}.png')
  icon = make_icon(128, 124)
  icon.save(EXT / 'icons' / 'icon-128.png')
  icon.save(STORE / 'store-icon-128x128.png')


def data_uri(path, mime):
  return f'data:{mime};base64,' + base64.b64encode(Path(path).read_bytes()).decode()


SAMPLE_SVG = '''<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
<defs>
<linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7928ca"/><stop offset=".55" stop-color="#ff0080"/><stop offset="1" stop-color="#ffb457"/></linearGradient>
<linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d1a65"/><stop offset="1" stop-color="#1b0b33"/></linearGradient>
<linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#241046"/><stop offset="1" stop-color="#0d0620"/></linearGradient>
</defs>
<rect width="640" height="360" fill="url(#s)"/>
<circle cx="430" cy="210" r="62" fill="#ffe6a8" opacity=".95"/>
<path d="M0 270 L110 170 L190 240 L290 130 L400 250 L500 175 L640 285 L640 360 L0 360Z" fill="url(#m1)"/>
<path d="M0 315 L90 260 L180 300 L300 235 L420 305 L540 250 L640 310 L640 360 L0 360Z" fill="url(#m2)"/>
</svg>'''
SAMPLE = 'data:image/svg+xml;base64,' + base64.b64encode(SAMPLE_SVG.encode()).decode()
LOGO = data_uri(EXT / 'icons' / 'logo.svg', 'image/svg+xml')


def popup_doc(state='empty', theme='light', fmt='png', os_key='Ctrl + V'):
  """Real popup markup and CSS with the given state applied, as a standalone document."""
  h = (EXT / 'popup.html').read_text()
  css = (EXT / 'popup.css').read_text()
  h = h.replace('<link rel="stylesheet" href="popup.css" />', '<style>' + css + '</style>')
  h = h.replace('<script src="theme.js"></script>', '').replace('<script src="popup.js"></script>', '')
  h = h.replace('icons/logo.svg', LOGO)
  h = h.replace('Ctrl + V', os_key)
  h = h.replace('<html lang="en">', f'<html lang="en" data-theme="{theme}">')
  h = h.replace('id="themeToggle" class="icon-btn"', f'id="themeToggle" data-current="{theme}" class="icon-btn"')
  for f in ('png', 'jpeg', 'webp'):
    h = h.replace(f'aria-checked="true" data-format="{f}"', f'aria-checked="false" data-format="{f}"')
    h = h.replace(f'aria-checked="false" data-format="{f}"', f'aria-checked="{"true" if f == fmt else "false"}" data-format="{f}"')
  if state == 'done':
    ext = 'jpg' if fmt == 'jpeg' else fmt
    size = {'png': '214.3 KB', 'jpeg': '96.4 KB', 'webp': '58.7 KB'}[fmt]
    h = h.replace('<div id="preview" hidden>', '<div id="preview">')
    h = h.replace('<div id="placeholder">', '<div id="placeholder" hidden>')
    h = h.replace('<p id="info" class="info"></p>', f'<p id="info" class="info">640×360 · {fmt.upper()} · {size}</p>')
    h = h.replace('<img id="previewImg" alt="Pasted image preview" />', f'<img id="previewImg" alt="Pasted image preview" src="{SAMPLE}" />')
    h = h.replace('<p id="status" role="status" aria-live="polite"></p>', f'<p id="status" class="ok" role="status">Downloaded pasted_20261031_101542.{ext}</p>')
  return h


def popup_frame(state='empty', theme='light', fmt='png', scale=1.5, os_key='Ctrl + V', height=None):
  heights = {'empty': 430, 'done': 468}
  hgt = height or heights[state]
  doc = html.escape(popup_doc(state, theme, fmt, os_key), quote=True)
  w, hh = 360 * scale, hgt * scale
  return (
    f'<div class="popup" style="width:{w}px;height:{hh}px;border-radius:{12 * scale}px">'
    f'<iframe srcdoc="{doc}" style="width:360px;height:{hgt}px;transform:scale({scale})" scrolling="no"></iframe>'
    '</div>'
  )


PAGE_CSS = '''
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');
* { box-sizing: border-box; }
html, body { margin: 0; }
body {
  font-family: 'Inter', system-ui, sans-serif; color: #171717; background: #fafafa;
  -webkit-font-smoothing: antialiased; overflow: hidden; position: relative;
}
.bg { position: absolute; inset: 0; background:
  radial-gradient(ellipse 620px 420px at 12% 8%, rgba(0,124,240,.20) 0%, transparent 70%),
  radial-gradient(ellipse 560px 400px at 70% 0%, rgba(121,40,202,.20) 0%, transparent 70%),
  radial-gradient(ellipse 460px 340px at 95% 40%, rgba(255,0,128,.16) 0%, transparent 70%),
  radial-gradient(ellipse 560px 380px at 30% 100%, rgba(255,77,77,.10) 0%, transparent 70%); }
.bg.dark { background:
  radial-gradient(ellipse 620px 420px at 12% 8%, rgba(0,124,240,.30) 0%, transparent 70%),
  radial-gradient(ellipse 560px 400px at 70% 0%, rgba(121,40,202,.32) 0%, transparent 70%),
  radial-gradient(ellipse 460px 340px at 95% 40%, rgba(255,0,128,.24) 0%, transparent 70%), #0b0b0b; }
.layer { position: relative; width: 100%; height: 100%; }
.popup { overflow: hidden; background: #fff; flex: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 40px 90px -24px rgba(23,23,23,.45), 0 12px 28px -10px rgba(23,23,23,.25); }
.popup.dk { box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 40px 90px -24px rgba(0,0,0,.8); }
iframe { border: 0; transform-origin: 0 0; display: block; background: transparent; }
.pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border-radius: 999px;
  background: #fff; border: 1px solid #ebebeb; color: #4d4d4d; font-size: 15px; font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,.05); }
.pill img { width: 22px; height: 22px; border-radius: 5px; }
h1 { margin: 0; font-weight: 600; letter-spacing: -0.045em; line-height: 1.04; }
p.sub { margin: 0; color: #4d4d4d; line-height: 1.45; }
kbd { font: 500 .8em 'JetBrains Mono', ui-monospace, monospace; padding: .08em .4em; background: #fff;
  border: 1px solid #ebebeb; border-radius: 8px; box-shadow: 0 1.5px 0 #d6d6d6; letter-spacing: 0; white-space: nowrap; }
'''


def page(width, height, body, dark=False):
  bg_cls = 'bg dark' if dark else 'bg'
  extra = 'body{background:#0b0b0b;color:#f0f0f0} p.sub{color:#aeaeae} .pill{background:#1e1e1e;border-color:#3a3a3a;color:#aeaeae} kbd{background:#1e1e1e;border-color:#3a3a3a;box-shadow:0 1.5px 0 #000;color:#f0f0f0}' if dark else ''
  return (
    f'<!doctype html><html><head><meta charset="utf-8"><style>{PAGE_CSS}{extra}'
    f'body{{width:{width}px;height:{height}px}}</style></head>'
    f'<body><div class="{bg_cls}"></div><div class="layer">{body}</div></body></html>'
  )


BRAND = f'<span class="pill"><img src="{LOGO}" alt="">Paste Download</span>'


def split_layout(eyebrow_html, headline, sub, popup, extra=''):
  return f'''
  <div style="position:absolute;left:84px;top:0;bottom:0;width:560px;display:flex;flex-direction:column;justify-content:center;gap:28px">
    <div>{eyebrow_html}</div>
    <h1 style="font-size:68px">{headline}</h1>
    <p class="sub" style="font-size:23px;max-width:500px">{sub}</p>
    {extra}
  </div>
  <div style="position:absolute;right:84px;top:0;bottom:0;display:flex;align-items:center">{popup}</div>'''


def shot1():
  return page(1280, 800, split_layout(
    BRAND, 'Copy. Paste.<br>Downloaded.',
    'Open the extension, press <kbd>Ctrl+V</kbd> or <kbd>Cmd+V</kbd>, and your copied image is saved.',
    popup_frame('empty', 'light', 'png', 1.5)))


def shot2():
  return page(1280, 800, split_layout(
    BRAND, 'One keypress<br>to a file.',
    'Pasted images download right away with a clean, timestamped name and a live preview.',
    popup_frame('done', 'light', 'png', 1.3)))


def shot3():
  return page(1280, 800, split_layout(
    BRAND, 'PNG, JPEG<br>or WebP.',
    'Switch formats on the spot. Your last choice is remembered, and JPEG gets a clean white background.',
    popup_frame('done', 'light', 'jpeg', 1.3)))


def shot4():
  left = popup_frame('empty', 'light', 'png', 1.05, 'Ctrl + V')
  right = popup_frame('empty', 'dark', 'png', 1.05, 'Ctrl + V').replace('class="popup"', 'class="popup dk"')
  body = f'''
  <div style="position:absolute;top:56px;left:0;right:0;text-align:center;display:flex;flex-direction:column;align-items:center;gap:18px">
    {BRAND}
    <h1 style="font-size:60px">Light, dark, or system.</h1>
    <p class="sub" style="font-size:22px">Matches the Paste Download website and your browser theme.</p>
  </div>
  <div style="position:absolute;left:0;right:0;bottom:52px;display:flex;justify-content:center;gap:56px">{left}{right}</div>'''
  return page(1280, 800, body)


def shot5():
  def row(title, text):
    return f'''<div style="display:flex;gap:14px;align-items:flex-start">
      <div style="flex:none;width:26px;height:26px;border-radius:50%;background:#0070f3;display:flex;align-items:center;justify-content:center;margin-top:2px">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div><div style="font-size:21px;font-weight:600;letter-spacing:-.02em">{title}</div>
      <div style="font-size:17px;color:#4d4d4d;margin-top:2px">{text}</div></div></div>'''
  rows = '<div style="display:flex;flex-direction:column;gap:20px">' + ''.join([
    row('Nothing is uploaded', 'Images are processed on your device.'),
    row('No account, no tracking', 'The extension makes no network requests.'),
    row('One permission', 'Clipboard read access, used only when you paste.'),
  ]) + '</div>'
  return page(1280, 800, split_layout(
    BRAND, 'Private<br>by design.',
    'Your clipboard stays yours.', popup_frame('done', 'light', 'webp', 1.3), rows))


SHOTS = [shot1, shot2, shot3, shot4, shot5]


def promo_small():
  body = f'''
  <div style="position:absolute;left:30px;top:0;bottom:0;width:200px;display:flex;flex-direction:column;justify-content:center;gap:14px">
    <img src="{LOGO}" alt="" style="width:52px;height:52px;border-radius:12px">
    <h1 style="font-size:34px;letter-spacing:-.04em">Paste.<br>Download.</h1>
    <p class="sub" style="font-size:13px">Clipboard images, saved in one keypress.</p>
  </div>
  <div style="position:absolute;right:-96px;top:34px">{popup_frame('done', 'light', 'png', 0.78)}</div>'''
  return page(440, 280, body)


def promo_marquee():
  body = f'''
  <div style="position:absolute;left:84px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center;gap:20px">
    <div style="display:flex;align-items:center;gap:14px">
      <img src="{LOGO}" alt="" style="width:56px;height:56px;border-radius:13px">
      <span style="font-size:28px;font-weight:600;letter-spacing:-.03em">Paste Download</span>
    </div>
    <h1 style="font-size:62px">Clipboard image<br>to file, instantly.</h1>
    <p class="sub" style="font-size:22px">Press <kbd>Ctrl+V</kbd> or <kbd>Cmd+V</kbd> in the popup. Private by design.</p>
  </div>
  <div style="position:absolute;right:70px;top:48px">{popup_frame('done', 'light', 'png', 1.0)}</div>'''
  return page(1400, 560, body)


def render(html_text, out, width, height, tmp, profile):
  src = tmp / (out.stem + '.html')
  src.write_text(html_text)
  raw = tmp / (out.stem + '.raw.png')
  subprocess.run([
    CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    f'--user-data-dir={profile}', f'--window-size={width},{height + 200}', '--virtual-time-budget=8000',
    f'--screenshot={raw}', src.as_uri()
  ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
  im = Image.open(raw).convert('RGB').crop((0, 0, width, height))
  out.parent.mkdir(parents=True, exist_ok=True)
  im.save(out, 'PNG')


def build_assets(keep_html=False):
  tmp = Path(tempfile.mkdtemp(prefix='pda-store-'))
  profile = tmp / 'profile'
  try:
    for i, fn in enumerate(SHOTS, 1):
      render(fn(), STORE / 'screenshots' / f'screenshot-{i}-1280x800.png', 1280, 800, tmp, profile)
    render(promo_small(), STORE / 'promo' / 'small-promo-440x280.png', 440, 280, tmp, profile)
    render(promo_marquee(), STORE / 'promo' / 'marquee-promo-1400x560.png', 1400, 560, tmp, profile)
  finally:
    if keep_html:
      print('HTML kept in', tmp)
    else:
      shutil.rmtree(tmp, ignore_errors=True)


def build_zip():
  files = ['manifest.json', 'popup.html', 'popup.css', 'popup.js', 'theme.js']
  files += [f'icons/{n}' for n in ('icon-16.png', 'icon-32.png', 'icon-48.png', 'icon-128.png', 'logo.svg')]
  out = STORE / f'paste-download-app-{VERSION}.zip'
  if out.exists():
    out.unlink()
  with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files:
      z.write(EXT / f, f)
  return out


if __name__ == '__main__':
  if not Path(CHROME).exists():
    sys.exit('Google Chrome not found')
  build_icons()
  build_assets(keep_html='--keep-html' in sys.argv)
  print('zip:', build_zip())
