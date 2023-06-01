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
           
            let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
       
            template = await vite.transformIndexHtml(url, template);
    
            const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
           
            const html = template.split(`<!--app-html-->`);
           
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
            
            vite.ssrFixStacktrace(e as Error);
        }
    });

    app.listen(3500, () => {
        console.log('http://localhost:3500');
    });
}

createServer();
