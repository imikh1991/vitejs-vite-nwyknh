import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom',
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
        const url = req.originalUrl;

        try {
            // 1. Read index.html
            let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
            // 2. Apply Vite HTML transforms.
            template = await vite.transformIndexHtml(url, template);
            // 3. Load the server entry.
            const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
            // 4. Inject the app-rendered HTML into the template.
            const html = template.split(`<!--app-html-->`);
            // 5. Create pipe
            const { pipe } = await render(url, {
                onShellReady() {
                    res.write(html[0]);
                    pipe(res);
                },
                onAllReady() {
                    res.write(html[0] + html[1]);
                    res.end();
                },
            });
            
        } catch (e) {
            // If an error is caught, let Vite fix the stack trace so it maps back
            // to your actual source code.
            vite.ssrFixStacktrace(e as Error);
        }
    });

    app.listen(3500, () => {
        console.log('http://localhost:3500/');
    });
}

createServer();
