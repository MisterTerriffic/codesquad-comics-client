import { useState } from "react";

function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [genre, setGenre] = useState("");
    const [numberofpages, setNumberOfPages] = useState(0);
    const [rating, setRating] = useState(0);
    const [synposis, setSynopsis] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        e.preventDefault();
        console.log("Title", e.target.value);
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value);
        e.preventDefault();
        console.log("Author", e.target.value);
    }
    const handlePublisher = (e) => {
        setPublisher(e.target.value);
        e.preventDefault();
        console.log("Publisher", e.target.value);
    }
    const handleGenre = (e) => {
        setGenre(e.target.value);
        e.preventDefault();
        console.log("Genre", e.target.value);
    }
  
    return(
        <form onSubmit={Create}>
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