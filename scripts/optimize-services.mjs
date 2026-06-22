// Optimiza las imágenes de fondo de los servicios.
// Deja tus fotos (jpg/png/webp) en  src/assets/<CARPETA>/  y corre:
//     node scripts/optimize-services.mjs
// Cada carpeta se convierte a WebP optimizado en  public/servicios/<id>/1.webp, 2.webp ...
// El componente Services.astro las detecta solas y las alterna en un slideshow.

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// Mapea  carpeta en src/assets  ->  id de servicio (carpeta de salida)
const MAP = {
  'E-comerce': 'ecommerce',
  'aplicaciones': 'dashboard',
  'paginas-web': 'shield',
  'ia': 'ai',
  'automations': 'automation',
  'hero': 'hero',
};

const exts = /\.(jpe?g|png|webp|avif)$/i;

// Recorte por imagen: si el motivo importante está arriba/abajo, evita que el crop 16:9 lo corte.
// Clave = parte del nombre del archivo de origen. Valores válidos de sharp: 'top','centre','bottom','left','right'...
const POSITION = {
  'emiliano-vittoriosi': 'top', // mantiene visible el título "ChatGPT" (está en la parte superior)
  'daniil-komov': 'top',        // conserva el código nítido de arriba (el resto es bokeh/borroso)
};
const gravityFor = (name) => {
  for (const k in POSITION) if (name.includes(k)) return POSITION[k];
  return 'centre';
};

// Realce de nitidez por imagen (para fotos con bokeh/desenfoque): clave = parte del nombre.
const SHARPEN = {
  'daniil-komov': { sigma: 2.2, m1: 1, m2: 2.5 }, // foto con mucho bokeh → realza el código nítido
  'blend-archive': { sigma: 1.6, m1: 1, m2: 2 },  // robot 3D: define bordes y reduce sensación de borroso
};
const sharpenFor = (name) => {
  for (const k in SHARPEN) if (name.includes(k)) return SHARPEN[k];
  return null;
};

// Recorte vertical fino (0 = arriba, 0.5 = centro, 1 = abajo). Control exacto de qué franja 16:9 mostrar.
const CROP_Y = {
  'agefis': 0.16,       // muestra más el diagrama de flujo (arriba) sin perder la laptop
  'krakenimages': 0.6,  // foto vertical: baja el encuadre para ver las 4 manos unidas (centro-bajo)
};
const cropYFor = (name) => {
  for (const k in CROP_Y) if (name.includes(k)) return CROP_Y[k];
  return null;
};

for (const [srcName, outId] of Object.entries(MAP)) {
  const srcDir = path.join('src/assets', srcName);
  const outDir = path.join('public/servicios', outId);
  if (!fs.existsSync(srcDir)) { console.log('· (omito, no existe)', srcDir); continue; }

  fs.mkdirSync(outDir, { recursive: true });
  for (const f of fs.readdirSync(outDir)) fs.rmSync(path.join(outDir, f)); // limpia salida previa

  const files = fs.readdirSync(srcDir).filter((f) => exts.test(f)).sort();
  let i = 1;
  for (const f of files) {
    const out = path.join(outDir, `${i}.webp`);
    const src = path.join(srcDir, f);
    let pipe = sharp(src);
    const cy = cropYFor(f);
    if (cy != null) {
      // Recorte 16:9 a lo ancho completo, con la franja vertical elegida (cy).
      const meta = await sharp(src).metadata();
      const AR = 1920 / 1080;
      let cw = meta.width, ch = Math.round(cw / AR);
      if (ch > meta.height) { ch = meta.height; cw = Math.round(ch * AR); }
      const left = Math.round((meta.width - cw) / 2);
      const top = Math.round((meta.height - ch) * cy);
      pipe = pipe.extract({ left, top, width: cw, height: ch }).resize(1920, 1080);
    } else {
      // No amplía imágenes pequeñas (evita el pixelado por upscale); solo reduce si son enormes.
      pipe = pipe.resize(1920, 1080, { fit: 'cover', position: gravityFor(f), withoutEnlargement: true });
    }
    const sh = sharpenFor(f);
    if (sh) pipe = pipe.sharpen({ sigma: sh.sigma, m1: sh.m1, m2: sh.m2 }); // realce extra para fotos con bokeh
    const info = await pipe.webp({ quality: 84 }).toFile(out);
    console.log('✓', out, `${info.width}x${info.height}`, Math.round(fs.statSync(out).size / 1024) + 'KB');
    i++;
  }
}
console.log('Listo.');
