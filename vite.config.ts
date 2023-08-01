import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { join } from 'path'

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env: Record<string, string> = loadEnv(mode, process.cwd())

    return {
        plugins: [react()],
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV)
        },
        resolve: {
            alias: { '@/': join(__dirname, 'src/') }
        }
    }
})
