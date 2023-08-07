import { defineConfig } from 'cypress'

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite'
        },
        supportFile: false,
        specPattern: 'tests/e2e/**/*.spec.tsx',
        indexHtmlFile: 'tests/configurations/setupComponent.html'
    }
})
