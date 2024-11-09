import prisma from "../../config";

const createAuthor = async (name: string, birthYear: number) => {
  return prisma.author.create({
    data: { name, birthYear },
  });
};
const getAuthors = async () => {
  return prisma.author.findMany();
};

const getAuthorById = async (id: number) => {
  return prisma.author.findUnique({
    where: { id },
    include: { books: true },
  });
};

const updateAuthor = async (
  id: number,
  data: Partial<{ name: string; birthYear: number }>
) => {
  return prisma.author.update({
    where: { id },
    data,
  });
};

const deleteAuthor = async (id: number) => {
  return prisma.author.delete({
    where: { id },
  });
};

export const authorService = {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
