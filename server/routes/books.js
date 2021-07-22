const express = require("express");
const router = express.Router();
const Books = require("../models/BookSchema");

// get all the books
router.get("/", (req, res) => {
  Books.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(404).json({ noBooksFound: "No Books Found" });
    });
});

// get a specific book
router.get("/:id", (req, res) => {
  console.log("req", req.params);
  Books.findById(req.params.id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.status(404).json({ noBooksFound: "No Book Found" });
    });
});

// create a book
router.post("/create", (req, res) => {
  const {
    title,
    isbn,
    author,
    description,
    published_date,
    publisher,
    updated_date,
  } = req.body;
  console.log(req.body);
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

// edit book details
router.put("/:id", (req, res) => {
  const {
    title,
    isbn,
    author,
    description,
    published_date,
    publisher,
    updated_date,
  } = req.body;
  Books.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: title,
        isbn: isbn,
        author: author,
        description: description,
        published_date: published_date,
        publisher: publisher,
        updated_date: updated_date,
      },
    }
  )
    .then((book) => {
      res.json({ msg: "Book updated Successfully" });
    })
    .catch((err) => {
      res.json({ err: "Error updating the book" });
    });
});

// delete a book
router.delete("/:id", (req, res) => {
  Books.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ msg: "Deleted Successfully" });
    }
  });
});

module.exports = router;
