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

router.post('/login', async (req, res) => {
  try {
    const body = req.body || {};
    if (!body.username) {
      const err = await readJson(['auth', 'login-error.json']).catch(() => ({ error: 'Missing username' }));
      return res.status(400).json(err);
    }
    const success = await readJson(['auth', 'login-success.json']);
    // echo provided username
    success.user = { ...success.user, name: body.username };
    res.json(success);
  } catch (e) {
    res.status(500).json({ error: 'Auth mock failure' });
  }
});

export default router;
