import express from "express";
import {
  fetchAllBooks,
  fetchBooksByCategory,
  fetchBookCountByCategory,
} from "../controllers/bookController.js";

const router = express.Router();

// get all books
router.get("/", fetchAllBooks);

// get books filtered by category
router.get("/category/:category", fetchBooksByCategory);

// get number of books per category
router.get("/category-count", fetchBookCountByCategory);

export default router;
