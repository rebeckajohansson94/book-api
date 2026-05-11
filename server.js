import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use((req, res) => {
  res.status(404).json({ error: "Could not find page" }); // statuskod 404 pga om sidan inte hittades
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
