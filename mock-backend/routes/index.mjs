import express from 'express';
import usersRouter from './users/index.mjs';
import booksRouter from './books/index.mjs';
import authRouter from './auth/index.mjs';

export default function registerApiRoutes() {
  const router = express.Router();
  router.use('/users', usersRouter);
  router.use('/books', booksRouter);
  router.use('/auth', authRouter);
  return router;
}
