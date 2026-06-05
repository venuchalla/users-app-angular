import express from 'express';
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Simple CORS middleware for local development
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Sample data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const books = [
  { id: 1, title: 'The Angular Way', author: 'Jane Doe' },
  { id: 2, title: 'TypeScript in Practice', author: 'John Smith' },
];

// Endpoints
app.get('/api/users', (req, res) => {
  res.json({ data: users });
});

app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ data: user });
});

app.get('/api/books', (req, res) => {
  res.json({ data: books });
});

app.post('/api/login', (req, res) => {
  const { username } = req.body || {};
  if (!username) return res.status(400).json({ error: 'Missing username' });

  // Always succeed in mock environment
  res.json({ token: 'mock-token-123', user: { id: 1, name: username } });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock backend listening at http://localhost:${port}`);
});

export default app;
