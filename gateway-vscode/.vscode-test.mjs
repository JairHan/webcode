import { defineConfig } from '@vscode/test-cli';
import { fileURLToPath } from 'node:url';

const version = process.env.VSCODE_TEST_VERSION?.trim() || '1.106.1';

export default defineConfig({
	files: 'out/extension-test/**/*.test.js',
	version,
	workspaceFolder: fileURLToPath(new URL('./src/extension-test/workspace', import.meta.url)),
	mocha: {
		timeout: 20_000,
	},
});
