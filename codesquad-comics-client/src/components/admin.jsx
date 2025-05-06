import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import booksData from "../data/books";

const Admin = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((result) => setBooks(result.data))
      .catch((error) => console.log("error :>> ", error));
  }, []);

  const handleDeleteBook = (bookId) => {
    fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log("result :>> ", result))
      .catch((error) => console.log("error :>> ", error));
  };

  return (
    <div className="container-content">
      <h1>ADMIN PAGE</h1>
      <div className="button-container-center">
        <button className="button-yellow">ADD NEW COMIC</button>
      </div>
      <br /> <br />
      <table className="table-container">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.rating}</td>
              <td>
                <button
                  className="button-blue"
                  onClick={() => navigate(`/books/${book._id}/update`)}
                >
                  UPDATE
                </button>
              </td>
              <td>
                <button
                  className="button-yellow"
                  onClick={() => handleDeleteBook(book._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;