import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import booksData from "../data/books"; //Kit: not needed

function Update() {
 const navigate = useNavigate();

  const { bookId } = useParams();

  const id = "2d4f24ca-f395-461f-bc57-6a7ca61d63b9";

  //const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}"; //Kit: almost

  const url = `https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}`;

  //Kit: this was supposed to be initialized to an empty object
  const [book, setBook] = useState({})
  // const [book, setBook] = useState({
  //   id: "",
  //   author: "",
  //   title: "",
  //   publisher: "",
  //   genre: "",
  //   numberofpages: 0,
  //   rating: 0,
  //   synopsis: "",
  // });

  useEffect(() => {
    //const foundBook = booksData.find((booksData) => booksData.id === id); //Kit: not needed
    // setBook(foundBook);
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
          setBook(result.data);
          navigate("/admin");
        })
        .catch((error) => console.log("error :>> ", error));
    
  }, [id]); //change to ID to target the right book

  const handleBookData = (e) => {
    e.preventDefault();

    //correct
    const body = {
        title: e.target.title.value,
        author: e.target.author.value,
        publisher: e.target.publisher.value,
        genre: e.target.genre.value,
        pages: e.target.pages.value,
        rating: e.target.rating.value,
        synopsis: e.target.synopsis.value,
      };

    fetch(url, { method: "PUT", body: JSON.stringify(body) }) //body as params
    .then((response) => response.JSON())
    .then((result) => {
      console.log("result :>> ", result);
      navigate("/admin");
    })
    .catch((error) => console.log("error", error));

  //Kit: not needed
    // e.preventDefault();
    // console.log(setBook(e.target.value));
    // console.log("Book Data Successful");
  };

  return (
    <main>
      <div className="box-design">
        <h1>Create New Comic</h1>
        <div>
          <form onSubmit={handleBookData}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={book.title}
              // Kit: change to above to use the book "satellite"
              //value="Title value stored in database"
              placeholder="Title"
              required
            ></input>
            <label htmlFor="author">Author:</label>
            <br />
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={book.author}
              // Kit: change to above to use the book "satellite"
              //value="Author value stored in database"
              placeholder="Author"
              required
            ></input>
            <label htmlFor="publishers">Publisher:</label>
            <br />
            <select id="publishers"
            //Kit: you were missing - 
            name="publishers"
            defaultValue={book.publisher}
            // Kit: change to above to use the book "satellite"
            required
            >
              <option value="Boom Box">BOOM!Box</option>
              <option value="DC">DC Comics</option>
              <option value="HNA">Harry N. Abrams</option>
              <option value="Icon Books">Icon Books</option>
              <option value="Image Comics">Image Comics</option>
              <option value="Marvel">Marvel</option>
              <option value="Simon & Schuster">Simon & Schuster</option>
              <option value="Top Shelf Productions">
                Top Shelf Productions
              </option>
              <option value="VIZ Media LLC">VIZ Media LLC</option>
              {/* Kit: disabled due to state */}
              {/* <option
                value="Publisher value stored in database"
                selected
                disabled
              >
                Publisher value stored in database
              </option> */}
            </select>

            <label htmlFor="genre">Genre:</label>
            <br />
            <input
              type="text"
              id="genre"
              name="genre"
              defaultValue={book.genre}
              // Kit: change to above to use the book "satellite"
              //value="Genre data stored in database"
              placeholder="Genre"
              required
            ></input>
            <label htmlFor="numberofpages">Number of Pages</label>
            <br />
            <input
              type="text"
              id="numberofpages"
              name="numberofpages"
              defaultValue={book.pages}
              // Kit: change to above to use the book "satellite"
              //value="255"
              placeholder="Number of Pages"
              required
            ></input>
            <label htmlFor="rating">Rating:</label>
            <br />
            <input
              type="text"
              id="rating"
              name="rating"
              defaultValue={book.rating}
              // Kit: change to above to use the book "satellite"
              //value="5"
              maxlength="2"
              size="2"
              required
            ></input>
            <label htmlFor="synop">Synopsis:</label>
            <br />
            {/* synopsis is a textarea not an input */}
            <textarea
              type="text"
              id="synopsis" //Kit: change to the full word to prevent errors in Back End
              name="synopsis"
              defaultValue={book.synopsis}
              // Kit: change to above to use the book "satellite"
              //value="Synopsis value stored in database"
              placeholder="Synopsis"
              required
            ></textarea>
            {/* Kit: change from button to input */}
            <input type="submit">Update</input>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Update;
