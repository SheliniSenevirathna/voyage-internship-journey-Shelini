import express from "express";
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/bookController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, getBooks);
router.post("/", authMiddleware, addBook);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

export default router;
