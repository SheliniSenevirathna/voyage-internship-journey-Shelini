// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Book from "./models/Book.js";

dotenv.config();

const seedBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
    genres: ["Fantasy", "Adventure"],
    pages: 310,
    isBestseller: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genres: ["Dystopian", "Political Fiction"],
    pages: 328,
    isBestseller: true,
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Book.deleteMany({});
    console.log("Cleared existing books");

    const created = await Book.insertMany(seedBooks);
    console.log(`✅ Seeded ${created.length} books`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Error during seeding:", err);
    process.exit(1);
  }
};

seed();
