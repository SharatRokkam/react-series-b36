import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { exec } from 'child_process';
import open from 'open';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false,
    watch: {
      usePolling: true,
    },
  },
  // Add custom start script to open Chrome
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED') {
          return;
        }
        warn(warning);
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

// Custom script to open in Chrome after server starts
if (process.env.NODE_ENV !== 'production') {
  exec('vite', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }).on('close', () => {
    open('http://localhost:3000', { app: { name: open.apps.chrome } });
  });
}
