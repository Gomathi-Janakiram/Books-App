const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 7000;

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

app.get("/", (req, res) => {
  res.json("Hi");
});

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
