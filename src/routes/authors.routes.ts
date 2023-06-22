import express from 'express';
import {
  createAuthor,
  getAllAuthors,
} from '../controller/authors.controller';

const authorsRouter = express.Router();
authorsRouter.post('/authors', createAuthor);
authorsRouter.get('/authors', getAllAuthors);

export default authorsRouter;
