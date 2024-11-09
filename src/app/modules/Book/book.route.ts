import express from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBook);
router.put("/:id", bookController.modifyBook);
router.delete("/:id", bookController.removeBook);

export const bookRoutes = router;
