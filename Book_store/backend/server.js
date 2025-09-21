import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Book API 🚀");
});

app.use("/api/books", booksRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
