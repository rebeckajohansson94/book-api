import express from "express";
import "dotenv/config";
import bookRoutes from "./src/routes/bookRoutes.js"; // imports all routes from the routes file

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/api/books", bookRoutes); // sets the main path for the API, all routes start with /api/books

app.use((req, res) => {
  res.status(404).json({ error: "Could not find page" }); // status code 404 if route/page is not found
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
