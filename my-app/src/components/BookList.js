import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000")
      .then((res) => {
        return res.json();
      })
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="section">
      <div className="row">
        <h1 className="mt-5">Books List</h1>
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <div className="text-end">
            <Link to="/create" className="btn btn-outline-primary">
              <i className="fas fa-plus" />
              <span className="ms-2">Add New Book</span>
            </Link>
          </div>
          {books ? <BookCard data={books} /> : null}
        </div>
        <div className="col-sm-2" />
      </div>
    </div>
  );
};

export default BooksList;
