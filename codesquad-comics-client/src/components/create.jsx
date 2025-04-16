import { useState } from "react";

function Create() {
    const handleBookCreate = (e) => {
        e.preventDefault();
        console.log("Create Book Submitting");

        console.log(e.target.title.value);
        console.log(e.target.author.value);
        console.log(e.target.publisher.value);
        console.log(e.target.genre.value);
        console.log(e.target.pages.value);
        console.log(e.target.rating.value);
        console.log(e.target.synopsis.value);
   }

    const handleTitle = (e) => {
        e.preventDefault();
        console.log("Title", e.target.value);
    }
    const handleAuthor = (e) => {
        e.preventDefault();
        console.log("Author", e.target.value);
    }
    const handlePublisher = (e) => {
        e.preventDefault();
        console.log("Publisher", e.target.value);
    }
    const handleGenre = (e) => {
        e.preventDefault();
        console.log("Genre", e.target.value);
    }
    const handlePages = (e) => {
        e.preventDefault();
        console.log("Pages", e.target.value);
    }
    const handleRating = (e) => {
        e.preventDefault();
        console.log("Rating", e.target.value);
    }
    const handleSynopsis = (e) => {
        e.preventDefault();
        console.log("Synopsis", e.target.value);
    }
  
  
  
    return(
        <form onSubmit={handleBookCreate}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title"/>
            <label htmlFor="Author">Author:</label>
            <input type="text" id="author" name="author"/>
            <label htmlFor="Publisher">Publisher:</label>
            <input type="text" id="publisher" name="publisher"/>
            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre"/>
            <label htmlFor="numberofpages">Number of Pages:</label>
            <input type="text" id="numberofpages" name="numberofpages"/>
            <label htmlFor="rating">Rating:</label>
            <input type="text" id="rating" name="rating"/>
            <label htmlFor="synposis">Synopsis:</label>
            <input type="text" id="synopsis" name="synopsis"/>
        </form>
    )
}


export default Create;