// Runs after both Vite builds. Writes the rendered page into build/index.html
// so crawlers that never execute JavaScript (link previews, Bing, AI search)
// still get the full content, then emits a sitemap stamped with the build date.
import { readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE_URL = 'https://www.josephsfeir.engineer/';
const PLACEHOLDER = '<!--app-html-->';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'build');
const ssrDir = path.join(root, '.ssr');

// Vite names the SSR bundle .mjs or .js depending on the package type.
const ssrEntry = (await readdir(ssrDir)).find(name => /^entry-server\.m?js$/.test(name));
if (!ssrEntry) throw new Error(`No entry-server bundle found in ${ssrDir}`);
const { render } = await import(pathToFileURL(path.join(ssrDir, ssrEntry)).href);

const indexPath = path.join(outDir, 'index.html');
const template = await readFile(indexPath, 'utf8');
if (!template.includes(PLACEHOLDER)) {
    throw new Error(`build/index.html is missing the ${PLACEHOLDER} placeholder`);
}
await writeFile(indexPath, template.replace(PLACEHOLDER, render()));

const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(
    path.join(outDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`
);

await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered build/index.html and wrote build/sitemap.xml (lastmod ${lastmod})`);
