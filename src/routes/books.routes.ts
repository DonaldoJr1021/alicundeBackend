import express from 'express';
import {
  createBook,
  getAllBooks,
  getAveragePagesPerChapter,
} from '../controller/books.controller';

const router = express.Router();

router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id/average', getAveragePagesPerChapter);

export default router;
