import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   remotes: {
    //     remoteApp: './dist/assets/remoteEntry.js',
    //   },
    //   shared: ['react', 'react-dom'],
    // }),
  ],
  server: {
    port: 9876,
  },
});
