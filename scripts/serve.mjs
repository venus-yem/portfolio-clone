import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const PORTS = (process.env.PORTS || '5173,8080')
  .split(',')
  .map((p) => Number(p.trim()))
  .filter(Boolean);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.pdf': 'application/pdf',
};

function createSpaHandler(port) {
  return (req, res) => {
    const rawUrl = req.url || '/';
    const cleanPath = decodeURIComponent(rawUrl.split('?')[0].split('#')[0]);
    const safeRel = path.normalize(cleanPath).replace(/^(\.\.(\/|\\|$))+/, '');
    let filePath = path.join(DIST_DIR, safeRel);

    let exists = false;
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
        exists = fs.existsSync(filePath);
      } else {
        exists = stat.isFile();
      }
    } catch {
      exists = false;
    }

    // Redirect legacy /dark/*.html or /light/*.html URLs cleanly into the React SPA
    if (!exists && (cleanPath.startsWith('/dark/') || cleanPath.startsWith('/light/'))) {
      const mode = cleanPath.startsWith('/light/') ? 'light' : 'dark';
      console.log(`[${port}] 302 ${req.method} ${rawUrl} -> /?theme=${mode}`);
      res.writeHead(302, { Location: `/?theme=${mode}` });
      res.end();
      return;
    }

    // SPA fallback for client-side routes (/about, /projects/:slug, /index.html, etc.)
    const ext = path.extname(cleanPath).toLowerCase();
    if (!exists && (!ext || ext === '.html')) {
      filePath = path.join(DIST_DIR, 'index.html');
      exists = fs.existsSync(filePath);
    }

    if (!exists) {
      console.log(`[${port}] 404 ${req.method} ${rawUrl} (host=${req.headers.host || '-'})`);
      res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      });
      res.end('Not Found');
      return;
    }

    const finalExt = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[finalExt] || 'application/octet-stream';
    const isHtml = finalExt === '.html';

    console.log(`[${port}] 200 ${req.method} ${rawUrl} -> ${path.relative(DIST_DIR, filePath)} (host=${req.headers.host || '-'})`);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': isHtml ? 'no-store, no-cache, must-revalidate' : 'public, max-age=3600',
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    fs.createReadStream(filePath).pipe(res);
  };
}

for (const port of PORTS) {
  const server = http.createServer(createSpaHandler(port));
  server.listen(port, '0.0.0.0', () => {
    console.log(`Perez React SPA server listening on http://0.0.0.0:${port}`);
  });
}
