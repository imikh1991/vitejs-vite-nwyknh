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
            // 4. render the app HTML.
            const appHtml = await render(url);
            // 5. Inject the app-rendered HTML into the template.
            const html = template.replace(`<!--app-html-->`, appHtml);

            // 6. Send the rendered HTML back.
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
            // If an error is caught, let Vite fix the stack trace so it maps back
            // to your actual source code.
            vite.ssrFixStacktrace(e as Error);
        }
    });

    app.listen(3501, () => {
        console.log('http://localhost:3501');
    });
}

createServer();
