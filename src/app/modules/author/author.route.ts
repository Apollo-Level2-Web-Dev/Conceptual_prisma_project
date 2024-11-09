import express from "express";
import { authorController } from "./author.controller";

const router = express.Router();

router.post("/", authorController.createAuthor);
router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAuthor);
router.put("/:id", authorController.modifyAuthor);
router.delete("/:id", authorController.removeAuthor);

export const authorRoutes = router;
