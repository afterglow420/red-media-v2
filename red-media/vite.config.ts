import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// Define the root directory of the project
const root = resolve(__dirname, 'src');

// Export the Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(root, 'assets'),
      '@pages': resolve(root, 'pages'),
      '@components': resolve(root, 'components'),
      '@hooks': resolve(root, 'hooks'),
      '@lib': resolve(root, 'lib'),
      '@page-init': resolve(root, 'page-init'),
      '@store': resolve(root, 'store'),
      '@hofs': resolve(root, 'hofs'),
      '@hocs': resolve(root, 'hocs'),
      '@api': resolve(root, 'api'),
    },
  },
});
