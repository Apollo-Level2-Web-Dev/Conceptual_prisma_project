import { Request, Response } from "express";
import { bookServices } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  const newBook = await bookServices.createBook(req.body);
  res.json(newBook);
};
const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookServices.getAllBooks();
  res.json(books);
};

const getBook = async (req: Request, res: Response) => {
  const book = await bookServices.getBookById(parseInt(req.params.id));
  res.json(book);
};

const modifyBook = async (req: Request, res: Response) => {
  const updatedBook = await bookServices.updateBook(
    parseInt(req.params.id),
    req.body
  );
  res.json(updatedBook);
};

const removeBook = async (req: Request, res: Response) => {
  await bookServices.deleteBook(parseInt(req.params.id));
  res.status(204).send("Book deleted");
};

export const bookController = {
  createBook,
  getAllBooks,
  getBook,
  modifyBook,
  removeBook,
};
