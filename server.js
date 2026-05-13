import express from "express";
import "dotenv/config";
import bookRoutes from "./src/routes/bookRoutes.js"; // hämtar alla routes från routes-filen

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/api/books", bookRoutes); // anger main-path för API:et, alla routes börjar med /api/books

app.use((req, res) => {
  res.status(404).json({ error: "Could not find page" }); // statuskod 404 om route/sida inte hittas
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
