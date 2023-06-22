import { Request, Response } from 'express';
import { Book } from '../models/Book';
import { Author } from '../models/Author';

let books: Book[] = [];
let authors: Author[] = [];

export const createBook = (req: Request, res: Response) => {
  const { id, title, chapters, pages, authorIds } = req.body;
  const book: Book = {
    id,
    title,
    chapters,
    pages,
    authors: [],
  };

  for (const authorId of authorIds) {
    const author = authors.find(a => a.id === authorId);
    if (author) {
      author.books.push(book);
      book.authors.push(author);
    }
  }

  books.push(book);

  res.status(201).json(book);
};

export const getAllBooks = (_req: Request, res: Response) => {
  res.json(books);
};

export const getAveragePagesPerChapter = (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  const averagePagesPerChapter = (book.pages / book.chapters).toFixed(2);

  res.json({
    bookId: book.id,
    averagePagesPerChapter,
  });
};
