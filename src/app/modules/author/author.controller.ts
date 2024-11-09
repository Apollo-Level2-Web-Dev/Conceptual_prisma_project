import { Request, Response } from "express";
import { authorService } from "./author.service";

const createAuthor = async (req: Request, res: Response) => {
  const { name, birthYear } = req.body;
  const newAuthor = await authorService.createAuthor(name, birthYear);
  res.json(newAuthor);
};

const getAllAuthors = async (_: Request, res: Response) => {
  const authors = await authorService.getAuthors();
  res.json(authors);
};

const getAuthor = async (req: Request, res: Response) => {
  const author = await authorService.getAuthorById(parseInt(req.params.id));
  res.json(author);
};

const modifyAuthor = async (req: Request, res: Response) => {
  const updatedAuthor = await authorService.updateAuthor(
    parseInt(req.params.id),
    req.body
  );
  res.json(updatedAuthor);
};

const removeAuthor = async (req: Request, res: Response) => {
  await authorService.deleteAuthor(parseInt(req.params.id));
  res.status(204).send("RIP Respected Author");
};

export const authorController = {
  createAuthor,
  getAllAuthors,
  getAuthor,
  modifyAuthor,
  removeAuthor,
};
