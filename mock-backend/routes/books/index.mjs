import express from 'express';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

const readJson = async (pathParts) => {
  const p = join(__dirname, '..', '..', 'mock-json', ...pathParts);
  const raw = await readFile(p, 'utf8');
  return JSON.parse(raw);
};

router.get('/', async (req, res) => {
  try {
    const data = await readJson(['books', 'success.json']);
    res.json({ data });
  } catch (e) {
    const err = await readJson(['books', 'error.json']).catch(() => ({ error: 'unknown' }));
    res.status(500).json(err);
  }
});

export default router;
