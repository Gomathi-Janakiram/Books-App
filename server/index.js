const express = require("express");
const mongoose = require("mongoose");
const BookSchema = require("./models/BookSchema");
const cors = require("cors");

const app = express();

const PORT = 7000;

// mongoose configuration
mongoose.connect(
  "mongodb+srv://Books:8vHJsEbU0BDyBOTW@cluster0.fvr4i.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error connecting to DB");
    } else {
      console.log("connected to DB");
    }
  }
);

// middlewares

app.use(express.json());
app.use(cors());

// routes

app.use(require("./routes/books"));

app.get("/", (req, res) => {
  res.json("Hi");
});

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
