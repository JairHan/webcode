import { rmSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const packageDirectory = resolve(scriptDirectory, '..');
const outputDirectory = resolve(packageDirectory, 'out');

if (dirname(outputDirectory) !== packageDirectory || basename(outputDirectory) !== 'out') {
  throw new Error(`Refusing to clean unexpected test output path: ${outputDirectory}`);
}

rmSync(outputDirectory, { recursive: true, force: true });
