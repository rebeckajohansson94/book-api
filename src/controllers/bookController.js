import {
  getAllBooks,
  getBooksByCategory,
  getBookCountByCategory,
} from "../models/bookModel.js";

// controller-fil: funktionerna tar emot requests (req) och responses (res), hämtar data från models och returnerar JSON med felhantering
export async function fetchAllBooks(req, res) {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" }); // statuskod 500 pga om oväntat fel
  }
}

export async function fetchBooksByCategory(req, res) {
  try {
    const { category } = req.params; // hämtar kategorin från URL:en, tex /category/Fantasy

    // felhantering ifall ingen kategori anges
    if (!category) {
      return res.status(400).json({
        error: "Category parameter is required", // statuskod 400 pga om ogiltig data från klienten
      });
    }

    const books = await getBooksByCategory(category);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function fetchBookCountByCategory(req, res) {
  try {
    const count = await getBookCountByCategory();
    res.json(count);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" }); // statuskod 500 pga om oväntat fel
  }
}
