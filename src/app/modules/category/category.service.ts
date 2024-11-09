import prisma from "../../config";

const createCategory = async (name: string) => {
  return prisma.category.create({
    data: { name },
  });
};

const getCategories = async () => {
  return prisma.category.findMany({
    include: { books: true },
  });
};

const getCategoryById = async (id: number) => {
  return prisma.category.findUnique({
    where: { id },
    include: { books: true },
  });
};

const updateCategory = async (id: number, name: string) => {
  return prisma.category.update({
    where: { id },
    data: { name },
  });
};

const deleteCategory = async (id: number) => {
  return prisma.category.delete({
    where: { id },
  });
};

export const categoryService = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
