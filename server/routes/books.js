const express = require("express");
const router = express.Router();
const Books = require("../models/BookSchema");

router.get("/", (req, res) => {
  Books.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(404).json({ noBooksFound: "No Books Found" });
    });
});

router.post("/create", (req, res) => {
  const book = new Books({
    title,
    isbn,
    author,
    description,
    published_date,
    publisher,
    updated_date,
  });
  book
    .save()
    .then((books) => {
      res.json({ msg: "Book Saved Successfully" });
    })
    .catch((err) => {
      res.status(404).json({ err: "Unable to add this book" });
    });
});

module.exports = router;
