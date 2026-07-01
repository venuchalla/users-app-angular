import express from 'express';
import registerApiRoutes from './routes/index.mjs';
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

// Mount API routes implemented under ./routes
app.use('/api', registerApiRoutes());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock backend listening at http://localhost:${port}`);
});

export default app;
