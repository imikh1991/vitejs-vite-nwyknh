import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
    env: {
        codeCoverage: {
            exclude: 'cypress/**/*.*',
        },
    },
    e2e: {
        baseUrl: 'http://localhost:3500',
        setupNodeEvents(on, config) {
            // implement node event listeners here

            codeCoverageTask(on, config);

            return config;
        },
        experimentalStudio: true,
    },
});
