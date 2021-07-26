import React from "react";
import front_page from "../front-page.jpeg";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex flex-wrap">
      {data.map((book) => (
        <Link to={`/show-book/${book._id}`} className="card mx-4 mt-5">
          <img src={front_page} className="card-img-top" alt="..." />
          <div className="card-body text-start">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookCard;
