/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';
import path from 'path';
import istanbul from 'vite-plugin-istanbul';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
    // svgr(),
        react(),
        istanbul({
            cypress: true,
            requireEnv: false,
        }),
    ],

    resolve: {
    /* alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@ui': path.resolve(__dirname, './src/components/UI'),
            '@pages': path.resolve(__dirname, './src/components/pages'),
        }, */
    },
    build: {
        sourcemap: 'hidden',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                'entry-client': path.resolve(__dirname, 'src/entry-client.tsx'),
            },
        },
    },
});
