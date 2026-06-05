Mock backend for local development

Run locally:

1. Start the mock server:

```bash
npm run mock:server
```

2. Access endpoints:
- `GET /api/users`
- `GET /api/users/:id`
- `GET /api/books`
- `POST /api/login` (JSON body `{ "username": "..." }`)

This server is intentionally minimal and requires no extra dependencies beyond the project's existing `express`.
