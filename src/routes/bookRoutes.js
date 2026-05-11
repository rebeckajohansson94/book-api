import express from "express";
import {
  fetchAllBooks,
  fetchBooksByCategory,
  fetchBookCountByCategory,
} from "../controllers/bookController.js";

const router = express.Router();

// hämtar alla böcker
router.get("/", fetchAllBooks);

// hämtar böcker filtrerade på kategori
router.get("/category/:category", fetchBooksByCategory);

// hämtar antal böcker per kategori
router.get("/category-count", fetchBookCountByCategory);

export default router;
