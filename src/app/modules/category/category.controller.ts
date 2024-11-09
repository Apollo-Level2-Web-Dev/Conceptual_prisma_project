import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name);
  res.json(newCategory);
};
const getAllCategories = async (_: Request, res: Response) => {
  const categories = await categoryService.getCategories();
  res.json(categories);
};

const getCategory = async (req: Request, res: Response) => {
  const category = await categoryService.getCategoryById(
    parseInt(req.params.id)
  );
  res.json(category);
};

const modifyCategory = async (req: Request, res: Response) => {
  const updatedCategory = await categoryService.updateCategory(
    parseInt(req.params.id),
    req.body.name
  );
  res.json(updatedCategory);
};

const removeCategory = async (req: Request, res: Response) => {
  await categoryService.deleteCategory(parseInt(req.params.id));
  res.status(204).send("Category deleted");
};

export const categoryController = {
  createCategory,
  getAllCategories,
  getCategory,
  modifyCategory,
  removeCategory,
};
