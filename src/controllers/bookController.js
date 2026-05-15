import {
  getAllBooks,
  getBooksByCategory,
  getBookCountByCategory,
} from "../models/bookModel.js";

// controller file: functions receive requests (req) and responses (res), fetches data from models and returns JSON with error handling
export async function fetchAllBooks(req, res) {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" }); // status code 500 for unexpected errors
  }
}

export async function fetchBooksByCategory(req, res) {
  try {
    const { category } = req.params; // gets the category from the URL, for example /category/Fantasy

    // error handling if no category is provided
    if (!category) {
      return res.status(400).json({
        error: "Category parameter is required", // status code 400 for invalid data from the client
      });
    }

    const books = await getBooksByCategory(category);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" }); // status code 500 for unexpected errors
  }
}

export async function fetchBookCountByCategory(req, res) {
  try {
    const count = await getBookCountByCategory();
    res.json(count);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" }); // status code 500 for unexpected errors
  }
}
