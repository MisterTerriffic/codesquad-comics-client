import React from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const handleBookCreate = (e) => {
    e.preventDefault(); //Kit: always prevent the default
    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
    }; //correct

   //correct
    console.log("Create Book Submitting");

    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/api/books/create"; //correct

    fetch(url, { method: "POST", body: JSON.stringify(body) }) //correct
      .then((response) => response.JSON())
      .then((result) => { //Kit: accept a parameter of result
        console.log("Success", result);
        navigate("/admin");
        
      })
      //.catch(console.log("Error")); //Kit: almost
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={handleBookCreate}>
      <label htmlFor="title">Title:</label>
      {/* Kit: you need the required keyword on inputs */}
      <input type="text" id="title" name="title" required />
      <label htmlFor="Author">Author:</label>
      <input type="text" id="author" name="author" required />
      <label htmlFor="Publisher">Publisher:</label>
      <input type="text" id="publisher" name="publisher" required />
      {/* where is the select portion? */}
      <label htmlFor="genre">Genre:</label>
      <input type="text" id="genre" name="genre" required/>
      <label htmlFor="numberofpages">Number of Pages:</label>
      <input type="number" id="numberofpages" name="numberofpages" required />
      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" name="rating" required />
      {/* this should be a text area */}
      <label htmlFor="synopsis">Synopsis:</label>
      {/* <input type="text" id="synopsis" name="synopsis" required/> */}
      <textarea
            name="synopsis"
            id="synopsis"
            placeholder="Synopsis"
            required
      ></textarea>
      {/* Kit: you did not have an input */}
      <input type="submit"/>
    </form>
  );
}

export default Create;
