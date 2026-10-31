const dropZone = document.getElementById('dropZone');
const placeholder = document.getElementById('placeholder');
const preview = document.getElementById('preview');
const previewImg = document.getElementById('previewImg');
const info = document.getElementById('info');
const statusEl = document.getElementById('status');
const formatGroup = document.getElementById('formatGroup');
const formatButtons = formatGroup.querySelectorAll('button');
const shortcut = document.getElementById('shortcut');
const downloadBtn = document.getElementById('downloadBtn');
const clearBtn = document.getElementById('clearBtn');
const themeToggle = document.getElementById('themeToggle');

const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
shortcut.textContent = isMac ? 'Cmd + V' : 'Ctrl + V';

let format = 'png';

function load(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage unavailable, ignore
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getMimeType(fmt) {
  const map = { png: 'image/png', jpeg: 'image/jpeg', webp: 'image/webp' };
  return map[fmt] || 'image/png';
}

function getExtension(fmt) {
  const map = { png: 'png', jpeg: 'jpg', webp: 'webp' };
  return map[fmt] || 'png';
}

function getTimestamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function setStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = type || '';
}

function setFormat(fmt) {
  format = fmt;
  formatButtons.forEach((btn) => {
    btn.setAttribute('aria-checked', String(btn.dataset.format === fmt));
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function convertAndDownload(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (format === 'jpeg') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);

  canvas.toBlob((blob) => {
    if (!blob) {
      setStatus('Could not convert this image.', 'error');
      return;
    }
    const filename = `pasted_${getTimestamp()}.${getExtension(format)}`;
    downloadBlob(blob, filename);
    info.textContent = `${img.naturalWidth}×${img.naturalHeight} · ${format.toUpperCase()} · ${formatFileSize(blob.size)}`;
    setStatus(`Downloaded ${filename}`, 'ok');
  }, getMimeType(format), 0.92);
}

function handleImage(blob) {
  const img = new Image();
  img.onload = () => {
    previewImg.src = img.src;
    placeholder.hidden = true;
    preview.hidden = false;
    convertAndDownload(img);
  };
  img.onerror = () => setStatus('That image could not be read.', 'error');
  img.src = URL.createObjectURL(blob);
}

async function readClipboardImage() {
  try {
    const items = await navigator.clipboard.read();
    for (const item of items) {
      const type = item.types.find((t) => t.startsWith('image/'));
      if (type) {
        handleImage(await item.getType(type));
        return;
      }
    }
    setStatus('No image found. Copy an image first.', 'error');
  } catch {
    setStatus('Clipboard blocked. Press ' + shortcut.textContent + ' instead.', 'error');
  }
}

function clearPreview() {
  previewImg.removeAttribute('src');
  preview.hidden = true;
  placeholder.hidden = false;
  setStatus('', '');
  dropZone.focus();
}

document.addEventListener('paste', (e) => {
  const items = e.clipboardData && e.clipboardData.items;
  if (!items) return;
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const blob = item.getAsFile();
      if (blob) {
        e.preventDefault();
        handleImage(blob);
        return;
      }
    }
  }
  setStatus('No image found. Copy an image first.', 'error');
});

dropZone.addEventListener('click', () => {
  if (preview.hidden) readClipboardImage();
});

dropZone.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && preview.hidden) {
    e.preventDefault();
    readClipboardImage();
  }
});

downloadBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (previewImg.naturalWidth > 0) convertAndDownload(previewImg);
});

clearBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  clearPreview();
});

formatButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    setFormat(btn.dataset.format);
    save('pdaFormat', format);
    if (!preview.hidden && previewImg.naturalWidth > 0) convertAndDownload(previewImg);
  });
});

const themeOrder = ['system', 'light', 'dark'];

function applyTheme(pref) {
  if (pref === 'light' || pref === 'dark') {
    document.documentElement.setAttribute('data-theme', pref);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  themeToggle.dataset.current = pref;
  themeToggle.setAttribute('aria-label', `Theme: ${pref}. Click to change`);
}

themeToggle.addEventListener('click', () => {
  const current = themeToggle.dataset.current || 'system';
  const next = themeOrder[(themeOrder.indexOf(current) + 1) % themeOrder.length];
  save('pdaTheme', next);
  applyTheme(next);
});

setFormat(load('pdaFormat', 'png'));
applyTheme(load('pdaTheme', 'system'));
dropZone.focus();
