import { useEffect, useState } from "react";
import Books from "../data/books";

function home() {
  const [bookData, setBookData] = useState([]);

  const url = "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    setBookData(bookData);
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        setBookData(result.data.book);
        console.log(result.data.book);
    })
    .catch(console.log("Error"))
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
      {bookData.map((Books) => (
        <div key={Books._id} className="box-design">
          <ul>
            <li>{Books.title}</li>
            <li>{Books.author}</li>
            <li>{Books.publisher}</li>
            <li>{Books.genre}</li>
            <li>{Books.pages}</li>
            <li>{Books.rating}</li>
            <li>{Books.synopsis}</li>
          </ul>
        </div>
      ))}
    </main>
  );
}

export default home;
