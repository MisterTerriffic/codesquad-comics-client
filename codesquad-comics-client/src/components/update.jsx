import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import booksData from "../data/books";

function Update() {
 const navigate = useNavigate();

  const { bookId } = useParams();

  const id = "2d4f24ca-f395-461f-bc57-6a7ca61d63b9";

  const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}";

  const [book, setBook] = useState({
    id: "",
    author: "",
    title: "",
    publisher: "",
    genre: "",
    numberofpages: 0,
    rating: 0,
    synopsis: "",
  });

  useEffect(() => {
    const foundBook = booksData.find((booksData) => booksData.id === id);
    setBook(foundBook);
    fetch(url)
        .then((response) => response.json())
        .then((foundBook) => console.log(foundBook))
        .catch(console.log("Error"));
    
  }, [book]);

  const handleBookData = (e) => {

  const handleSubmission = () => {
    const putURL = `https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}`;

    const body = {
        title: e.target.title.value,
        author: e.target.author.value,
        publisher: e.target.publisher.value,
        genre: e.target.genre.value,
        pages: e.target.pages.value,
        rating: e.target.rating.value,
        synopsis: e.target.synopsis.value,
      };

    fetch(putURL, { method: "PUT", body: JSON.stringify() })
    .then((response) => response.JSON())
    .then((body) => {
        console.log("Success")
        console.log(body)
        navigate("/admin");
  })
    .catch(console.log("error"))

    }
    e.preventDefault();
    console.log(setBook(e.target.value));
    console.log("Book Data Successful");
  };

  return (
    <main>
      <div className="box-design">
        <h1>Create New Comic</h1>
        <div>
          <form action="/action_page.php" onSubmit={handleBookData}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              value="Title value stored in database"
              placeholder="Title"
              required
            ></input>
            <label htmlFor="author">Author:</label>
            <br />
            <input
              type="text"
              id="author"
              name="author"
              value="Author value stored in database"
              placeholder="Author"
              required
            ></input>
            <label htmlFor="publishers">Publisher:</label>
            <br />
            <select id="publishers">
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
              <option
                value="Publisher value stored in database"
                selected
                disabled
              >
                Publisher value stored in database
              </option>
            </select>

            <label htmlFor="genre">Genre:</label>
            <br />
            <input
              type="text"
              id="genre"
              name="genre"
              value="Genre data stored in database"
              placeholder="Genre"
              required
            ></input>
            <label htmlFor="numberofpages">Number of Pages</label>
            <br />
            <input
              type="text"
              id="numberofpages"
              name="numberofpages"
              value="255"
              placeholder="Number of Pages"
              required
            ></input>
            <label htmlFor="rating">Rating:</label>
            <br />
            <input
              type="text"
              id="rating"
              name="rating"
              value="5"
              maxlength="2"
              size="2"
              required
            ></input>
            <label htmlFor="synop">Synopsis:</label>
            <br />
            <input
              type="text"
              id="synop"
              name="synop"
              value="Synopsis value stored in database"
              placeholder="Synopsis"
              required
            ></input>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Update;
