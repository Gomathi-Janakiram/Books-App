import React, { useState } from "react";
// import { Link } from "react-router-dom";

const CreateBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    date: "",
    publisher: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookDetails);
  };

  return (
    <div className="section">
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <div className="mx-5">
            <div className="text-start mt-5">
              <button className="btn btn-outline-primary">
                Show Book List
              </button>
            </div>
            <p className="fw-bold fs-1 mt-3">Add Book</p>
            <p className="fs-5">Create New Book</p>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of the book"
                  value={bookDetails.title}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, title: e.target.value })
                  }
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ISBN"
                  value={bookDetails.isbn}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, isbn: e.target.value })
                  }
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  value={bookDetails.author}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, author: e.target.value })
                  }
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Describe this book"
                  value={bookDetails.description}
                  onChange={(e) =>
                    setBookDetails({
                      ...bookDetails,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Published Date"
                  value={bookDetails.date}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, date: e.target.value })
                  }
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Publisher of this book"
                  value={bookDetails.publisher}
                  onChange={(e) =>
                    setBookDetails({
                      ...bookDetails,
                      publisher: e.target.value,
                    })
                  }
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-3" />
      </div>
    </div>
  );
};

export default CreateBook;
