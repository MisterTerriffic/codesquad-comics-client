import React, { useEffect, useState } from "react";
import books from "../data/books";

function home() {
  const [bookData, setBookData] = useState([]);
      //const [bookData, setBookData] = useState([]); //correct syntax, but naming conventions create cumulative conflicts within your codebase

  const url = "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    //setBookData(bookData);//always fetch first
    setBookData(bookData);
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        setBookData(result.data); //Kit: result.data is OK
        console.log(result.data);
    })
    //.catch(console.log("Error")) //Kit: almost
    .catch(console.log("error"));
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
       {bookData.map((books) => (
        <div key={books._id} className="box-design">
          <ul>
            <li>{books.title}</li>
            <li>{books.author}</li>
            <li>{books.publisher}</li>
            <li>{books.genre}</li>
            <li>{books.pages}</li>
            <li>{books.rating}</li>
            <li>{books.synopsis}</li>
          </ul>
        </div>
      ))}
       </div>
      
    </main>
  );
}

export default home;
