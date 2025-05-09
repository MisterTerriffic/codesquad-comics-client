import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import books from "../data/books";

const Admin = () => {
  const [bookData, setBookData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setBookData(bookData);
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((bookData) => setBookData(bookData))
      .catch(console.log("error :>> "));
  }, []);

  const handleDeleteBook = (bookId) => {
    fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((bookId) => console.log("result :>> ", bookId))
      .catch(console.log("error :>> "));
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
