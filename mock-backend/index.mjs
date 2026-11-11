import express from 'express';
import registerApiRoutes from './routes/index.mjs';
import samlRouter from './routes/saml/index.mjs';
const app = express();
const port = process.env.PORT || 3001;
const allowedOrigins = new Set(
  (process.env.SAML_ALLOWED_ORIGINS ||
    'https://localhost:4200,http://localhost:4200')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
);

app.use(express.json());

// Allow credentialed requests only from configured frontend origins.
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Mount API routes implemented under ./routes
app.use('/api', registerApiRoutes());
app.use('/saml', samlRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock backend listening at http://localhost:${port}`);
});

export default app;
