import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// const PROD_PORT = import.meta.env.VITE_PROD_PORT;

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return defineConfig({
		plugins: [react()],
		preview: {
		  	port: process.env.VITE_PROD_PORT,
        host: process.env.VITE_PROD_HOST
		},
    });
}