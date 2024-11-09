import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategory);
router.put("/:id", categoryController.modifyCategory);
router.delete("/:id", categoryController.removeCategory);

export const categoryRoutes = router;
