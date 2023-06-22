import express from 'express';
import bookRouter from './routes/books.routes';
import authorsRouter from './routes/authors.routes';
const app = express();
app.use(express.json());


// Routes
app.use(bookRouter);
app.use(authorsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
