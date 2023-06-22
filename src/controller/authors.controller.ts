import { Request, Response } from 'express';
import { Author} from '../models/Author';

let authors: Author[] = [];

export const createAuthor = (req: Request, res: Response) => {
    const { id, name } = req.body;
    const author: Author = {
      id,
      name,
      books: [],
    };
  
    authors.push(author);
  
    res.status(201).json(author);
  };
  
  export const getAllAuthors = (_req: Request, res: Response) => {
    res.json(authors);
  };
