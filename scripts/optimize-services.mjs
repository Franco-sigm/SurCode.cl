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
};

const exts = /\.(jpe?g|png|webp|avif)$/i;

// Recorte por imagen: si el motivo importante está arriba/abajo, evita que el crop 16:9 lo corte.
// Clave = parte del nombre del archivo de origen. Valores válidos de sharp: 'top','centre','bottom','left','right'...
const POSITION = {
  'emiliano-vittoriosi': 'top', // mantiene visible el título "ChatGPT" (está en la parte superior)
};
const gravityFor = (name) => {
  for (const k in POSITION) if (name.includes(k)) return POSITION[k];
  return 'centre';
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
    const info = await sharp(path.join(srcDir, f))
      // No amplía imágenes pequeñas (evita el pixelado por upscale); solo reduce si son enormes.
      .resize(1920, 1080, { fit: 'cover', position: gravityFor(f), withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(out);
    console.log('✓', out, `${info.width}x${info.height}`, Math.round(fs.statSync(out).size / 1024) + 'KB');
    i++;
  }
}
console.log('Listo.');
