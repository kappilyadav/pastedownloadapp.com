import type { HomeContent, UiStrings } from '../types';

export const es: UiStrings & HomeContent = {
  meta: {
    title: 'Guardar imagen del portapapeles | Descargar imagen copiada',
    description: 'Guarda la imagen del portapapeles al instante: pega una imagen copiada o una captura con Ctrl+V y descárgala como PNG, JPEG o WebP. Gratis, sin instalar ninguna aplicación y sin subir archivos.',
    keywords: 'guardar imagen del portapapeles, descargar imagen del portapapeles, descargar imagen copiada, guardar imagen copiada, cómo guardar una imagen copiada, copiar imagen y guardar, PasteDownload'
  },
  skip: 'Saltar al contenido principal',
  header: {
    home: 'Inicio',
    about: 'Acerca de',
    blog: 'Blog',
    contact: 'Contacto',
    categories: 'Categorías',
    disclaimer: 'Aviso legal',
    bookmark: 'Marcador',
    addToHome: 'Añadir a la pantalla de inicio',
    openMenu: 'Abrir menú',
    chooseTheme: 'Elegir tema',
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
    logoAlt: 'Logotipo de PasteDownloadApp'
  },
  paste: {
    title: 'Pegar desde el portapapeles',
    subtitle: 'Pulsa Ctrl+V o ⌘+V para pegar una imagen',
    autoDownload: 'Descarga automática',
    imageFormat: 'Formato de imagen',
    ariaLabel: 'Pega la imagen aquí o haz clic para acceder al portapapeles. Pulsa Ctrl+V para pegar una imagen.',
    placeholder: 'Pega la imagen aquí',
    orClick: 'O haz clic para acceder al portapapeles',
    accessClipboard: 'Acceder al portapapeles',
    previewAlt: 'Vista previa de la imagen pegada',
    download: 'Descargar',
    clear: 'Borrar',
    privacy: 'Privacidad ante todo: todo el procesamiento se queda en tu navegador'
  },
  stats: {
    unitOne: 'imagen guardada',
    unitMany: 'imágenes guardadas',
    levels: ['Novato del portapapeles', 'Primer lanzamiento', 'Experto en pegar', 'Racha de descargas', 'Héroe de las capturas', 'Realeza del portapapeles', 'Leyenda'],
    firstPrompt: '¡Pega y descarga tu primera imagen!',
    next: 'Faltan {n} para {emoji} {name}',
    top: 'Has llegado al nivel máximo. ¡Eres una leyenda!',
    progressLabel: 'Progreso hacia el siguiente nivel'
  },
  features: {
    eyebrow: 'Funciones',
    heading: 'Por qué usar PasteDownload para descargar imágenes al instante',
    intro: 'Guarda imágenes del portapapeles y convierte formatos: todo en tu navegador, nada sale de tu dispositivo.',
    items: [
      { title: 'Pegar desde el portapapeles', description: 'Usa Ctrl+V o Cmd+V para convertir capturas, fotos y gráficos copiados en archivos descargables.' },
      { title: 'Conversión de formato', description: 'Convierte las imágenes pegadas entre PNG, JPEG y WebP antes de guardarlas en tu dispositivo.' },
      { title: 'Privacidad ante todo', description: 'Las imágenes del portapapeles se procesan localmente en tu navegador, así que tus archivos privados siguen en tu dispositivo.' },
      { title: 'Descarga automática', description: 'Activa la descarga automática para guardar cada imagen pegada al instante. Ideal para varias imágenes seguidas.' },
      { title: 'Arrastrar y soltar', description: 'Arrastra archivos de imagen a la zona de pegado para ver una vista previa inmediata y las opciones de descarga.' }
    ]
  },
  howTo: {
    eyebrow: 'Paso a paso',
    heading: 'Cómo guardar una imagen del portapapeles como archivo',
    intro: 'Cuatro pasos, alrededor de un minuto. Todas las capturas de abajo muestran la herramienta real con una imagen de prueba real.',
    jsonName: 'Cómo guardar una imagen del portapapeles como archivo',
    jsonDescription: 'Copia una imagen, pégala en PasteDownloadApp, elige PNG, JPEG o WebP y descarga el archivo. Todo se ejecuta en tu navegador.',
    toolName: 'Un navegador web',
    steps: [
      {
        title: 'Copia una imagen',
        alt: 'Captura de un panel de ventas con un recuadro de selección rojo discontinuo y el número 1, que muestra el área copiada al portapapeles',
        body: 'Copia cualquier imagen al portapapeles. Haz una captura directa al portapapeles con Win+Mayús+S en Windows o Cmd+Mayús+Ctrl+4 en Mac, o haz clic derecho sobre una imagen en el navegador y elige Copiar imagen.'
      },
      {
        title: 'Pégala en la herramienta',
        alt: 'El cuadro Pegar desde el portapapeles de PasteDownloadApp con la zona de pegado rodeada en rojo y marcada con el número 2',
        body: 'Haz clic en el cuadro y pulsa Ctrl+V, o Cmd+V en Mac. Si no pasa nada, pulsa Acceder al portapapeles y acepta el permiso que pide el navegador. También puedes arrastrar un archivo de imagen al cuadro.'
      },
      {
        title: 'Elige un formato',
        alt: 'PasteDownloadApp con la vista previa del panel pegado y el menú de formato en WebP, rodeado en rojo y marcado con el número 3',
        body: 'PNG es el formato predeterminado. Cambia a WebP o JPEG desde el menú y el tamaño aparece junto al botón Descargar. Usa PNG para conservar la transparencia, JPEG para máxima compatibilidad y WebP para el archivo más ligero.'
      },
      {
        title: 'Descarga el archivo',
        alt: 'PasteDownloadApp con el botón Descargar rodeado en rojo y marcado con el número 4',
        body: 'La descarga automática viene activada, así que el archivo se guarda al pegar y de nuevo cada vez que cambias el formato. Desmárcala si quieres comparar formatos primero y pulsa Descargar cuando estés conforme. Los archivos se llaman pasted_ seguido de la fecha y la hora.'
      }
    ]
  },
  footer: {
    tagline: 'Pega fotos desde tu portapapeles y descárgalas al instante. Todo el procesamiento ocurre en tu navegador: no se sube nada.',
    product: 'Producto',
    paste: 'Pegar',
    features: 'Funciones',
    company: 'Empresa',
    about: 'Acerca de',
    blog: 'Blog',
    author: 'Autor',
    categories: 'Categorías',
    contact: 'Contacto',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    terms: 'Términos y condiciones',
    disclaimer: 'Aviso legal',
    rights: 'Todos los derechos reservados.',
    sitemap: 'Mapa del sitio',
    logoAlt: 'Logotipo de PasteDownloadApp'
  },
  languages: { label: 'Idioma' },
  hero: {
    badge: 'Privacidad ante todo · 100 % en el navegador',
    h1: 'Guardar imagen del portapapeles: descarga la imagen copiada al instante',
    intro: 'Copia una imagen, pulsa Ctrl+V y descárgala como PNG, JPEG o WebP. PasteDownload es una herramienta gratuita y privada para guardar una imagen copiada, una captura de pantalla o un archivo arrastrado en tu dispositivo, sin instalar ninguna aplicación.',
    navLabel: 'Páginas de información',
    nav: { about: 'Acerca de', blog: 'Blog', author: 'Autor', privacy: 'Privacidad', terms: 'Términos', disclaimer: 'Aviso legal', contact: 'Contacto' }
  },
  what: {
    heading: '¿Qué es PasteDownload?',
    body: 'PasteDownload (pastedownloadapp.com) es una herramienta online gratuita para guardar la imagen del portapapeles. Copia cualquier imagen, pégala en el cuadro y descárgala como archivo PNG, JPEG o WebP. Funciona por completo en tu navegador, así que no hay nada que instalar y tus imágenes nunca se suben.'
  },
  clipboard: {
    heading: 'Descarga imágenes copiadas desde tu portapapeles',
    intro: 'La mayoría de las imágenes que copias nunca llegan a ser un archivo: se quedan en el portapapeles hasta que copias otra cosa. PasteDownload las convierte en un archivo real en un solo paso, para que puedas descargar una imagen copiada sin complicaciones.',
    cards: [
      { title: 'Pegar y descargar', body: 'Pulsa Ctrl+V (Cmd+V en Mac) en el cuadro y la imagen se guarda como archivo al instante. Sin subir nada, sin cuenta y, con la descarga automática activada, sin pulsar ningún botón más.' },
      { title: 'Guardar una imagen copiada', body: 'Haz clic derecho sobre cualquier imagen, elige Copiar imagen y pégala aquí para guardarla. Sirve para fotos de la web, imágenes de chats y dibujos copiados de documentos y presentaciones.' },
      { title: 'Del portapapeles a PNG, JPG o WebP', body: 'Convierte la imagen del portapapeles al formato que necesites mientras la descargas: PNG para transparencia, JPEG para compatibilidad o WebP para el archivo más pequeño.' }
    ]
  },
  faq: {
    heading: 'Preguntas frecuentes',
    items: [
      { q: '¿Cómo guardo una imagen del portapapeles?', a: 'Copia la imagen con Copiar imagen o con un atajo de captura, abre PasteDownload, haz clic en el cuadro de pegado y pulsa Ctrl+V (Cmd+V en Mac). La imagen se muestra al instante y se guarda como archivo PNG, JPEG o WebP.' },
      { q: '¿Cómo descargo una imagen copiada?', a: 'Solo tienes que pegar la imagen copiada en el cuadro. Con la descarga automática activada, el archivo se guarda en el momento de pegar. Si prefieres elegir primero el formato, desactívala y pulsa Descargar.' },
      { q: '¿Puedo guardar una imagen del portapapeles desde el móvil?', a: 'Sí. Pulsa Acceder al portapapeles, concede el permiso y pega la imagen. Si el botón no responde, importa la imagen desde la galería o el gestor de archivos. Android e iOS gestionan este permiso de forma distinta.' },
      { q: '¿Por qué Ctrl+V no pega mi imagen?', a: 'La causa más común es que el portapapeles no contiene una imagen, por ejemplo porque copiaste un enlace. También puede ser que la zona de pegado no tenga el foco o que tu navegador aplique permisos más estrictos.' },
      { q: '¿Puedo convertir la imagen pegada a otro formato?', a: 'Sí. Pega una imagen del portapapeles o arrastra un archivo y descárgalo como PNG, JPEG o WebP. La conversión se hace en tu navegador con la API Canvas.' },
      { q: '¿Se sube mi imagen a algún servidor?', a: 'No. Leer los datos de la imagen con la API Clipboard y convertirla con la API Canvas ocurre por completo en tu dispositivo. Tu imagen no se envía a ningún sitio.' },
      { q: '¿PasteDownload es gratis?', a: 'Sí. Es gratuito, sin registro, sin marcas de agua y sin límite de uso.' },
      { q: '¿Funciona con una imagen copiada de un PDF?', a: 'Depende de tu visor de PDF. Si te permite hacer clic derecho en una imagen incrustada y elegir Copiar imagen, se pegará con normalidad. Si no, haz una captura de la página del PDF.' }
    ]
  },
  webApp: {
    description: 'PasteDownload es una herramienta online gratuita para guardar la imagen del portapapeles. Descarga imágenes copiadas y capturas como PNG, JPEG o WebP con procesamiento privado en el navegador.',
    featureList: [
      'Pega con Ctrl+V o Cmd+V para guardar una imagen copiada',
      'Descarga la imagen del portapapeles como PNG, JPEG o WebP',
      'Convierte las imágenes pegadas a PNG, JPEG o WebP',
      'El procesamiento ocurre en tu navegador y no se sube nada',
      'La descarga automática guarda cada imagen pegada al instante',
      'Arrastra y suelta archivos de imagen en la zona de pegado'
    ]
  }
};
