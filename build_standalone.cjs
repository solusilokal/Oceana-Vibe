const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Pastikan dist/assets ada (jika belum, jalankan build terlebih dahulu)
if (!fs.existsSync('dist/assets')) {
  console.log('[INFO] dist/assets belum ditemukan. Menjalankan vite build terlebih dahulu...');
  execSync('npm.cmd run build', { stdio: 'inherit' });
}

// 1. Bundle JS into IIFE (Self-executing, no ES module, no CORS issues on file://)
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

// 2. Read compiled CSS from dist/assets/
const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(f => f.endsWith('.css'));
if (!cssFile) {
  throw new Error('File CSS di dist/assets tidak ditemukan.');
}
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
console.log('CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');

// 3. Create standalone.html (works 100% on file:// double click and offline!)
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#1e1b4b" />

    <title>Oceana Vibe - Surga Tersembunyi di Pesisir Tropis</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="Oceana Vibe - Surga Tersembunyi di Pesisir Tropis" />
    <meta name="description" content="Rasakan deburan ombak, pasir putih yang lembut, dan pesona sunset memukau. Pelarian sempurna dari hiruk-pikuk kota hanya di Oceana Vibe." />
    <meta name="keywords" content="Oceana Vibe, Wisata Pantai, Ekowisata Pesisir, Liburan Tropis, Sunset Pantai, Snorkeling" />
    <meta name="author" content="Oceana Vibe" />
    <meta name="robots" content="index, follow" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="./logo-oceana-vibe.png" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Oceana Vibe" />
    <meta property="og:title" content="Oceana Vibe - Surga Tersembunyi di Pesisir Tropis" />
    <meta property="og:description" content="Rasakan deburan ombak, pasir putih yang lembut, dan pesona sunset memukau. Pelarian sempurna dari hiruk-pikuk kota hanya di Oceana Vibe." />
    <meta property="og:image" content="./hero-beach-sunset.jpg" />

    <!-- Google Fonts: Outfit -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#fffbeb] min-h-screen text-[#1e1b4b]">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('standalone.html written successfully! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
