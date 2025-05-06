import React, { useEffect, useState } from "react";
//import books from "../data/books";

function home() {
  const [books, setBooks] = useState([]);
      //const [bookData, setBookData] = useState([]); //correct syntax, but naming conventions create cumulative conflicts within your codebase

  const url = "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    //setBookData(bookData);//always fetch first
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        setBooks(result.data); //Kit: result.data is OK
        console.log(result.data);
    })
    //.catch(console.log("Error")) //Kit: almost
    .catch((error) => console.log("error", error));
  }, []);

  return (
    <main>
      <div className="box-design">
        <h1>Codesquad Comics</h1>
        <p>
          {" "}
          CodeSquad Comics is a collection of graphic novels read by Walter.
          Copyrighted images are used for review purposes only. Meta information
          about this collection can be found below. A detailed list of all the
          graphic novels in this collection can be found on the homepage.
          Additional details about each comic book, including the author, genre,
          number of pages, and a brief synopsis, can be found by navigating to
          the homepage and clicking the image of the book cover or the Details
          link for the desired graphic novel.
        </p>
      </div>
       {/* Kit: this should not be pulling from the books.js file but from the books state. See renamed variables */}
       <div>
       {books.map((book) => (
        <div key={book._id} className="box-design">
          <ul>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <li>{book.publisher}</li>
            <li>{book.genre}</li>
            <li>{book.pages}</li>
            <li>{book.rating}</li>
            <li>{book.synopsis}</li>
          </ul>
        </div>
      ))}
       </div>
      
    </main>
  );
}

export default home;
