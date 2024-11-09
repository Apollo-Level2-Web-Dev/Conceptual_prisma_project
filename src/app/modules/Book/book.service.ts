import { Book } from "@prisma/client";
import prisma from "../../config";

const createBook = async (data: Book) => {
  const result = await prisma.book.create({ data });
  return result;
};

const getAllBooks = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const getBookById = async (id: number) => {
  return prisma.book.findUnique({
    where: { id },
    include: { author: true, category: true, user: true },
  });
};

const updateBook = async (
  id: number,
  data: Partial<{
    title: string;
    publishedYear: number;
    authorId: number;
    categoryId: number;
  }>
) => {
  return prisma.book.update({
    where: { id },
    data,
  });
};

const deleteBook = async (id: number) => {
  return prisma.book.delete({
    where: { id },
  });
};

export const bookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
