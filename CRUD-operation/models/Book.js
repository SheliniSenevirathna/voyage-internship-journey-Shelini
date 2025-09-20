// models/Book.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },
  publishedYear: {
    type: Number,
    required: [true, "Published year is required"],
  },
  genres: {
    type: [String],
    default: [],
  },
  pages: {
    type: Number,
    required: [true, "Number of pages is required"],
    min: [1, "Book must have at least 1 page"],
  },
  isBestseller: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
