import { useState, useEffect } from "react";
import books from "../data/books"

function Admin(){ 
    const [bookData, setBookData] = useState([]);

    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books";

    const deleteUrl = `https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`;

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

      const handleDeleteBook =() => {
        fetch(deleteUrl, {method: "DELETE", body: bookData})
            .then((response) => response.json())
            .then(() => console.log("Success"))
            .catch(console.log("Error"))
      }

    return(
<main>  
    <div>
        <button onClick={handleDeleteBook}>Delete</button>
    </div>
    <div>
        <button onClick="/update">Update</button> 
    </div>
    <div key={books._id} className="box-design">
    {bookData.map((bookData) => (
        <tr>
            <td>{bookData.title}</td>
            <td>{bookData.author}</td>
            <td>{bookData.publisher}</td>
            <td>{bookData.genre}</td>
            <td>{bookData.pages}</td>
            <td>{bookData.rating}</td>
            <td>{bookData.synopsis}</td>
        </tr>
    ))}
    </div>
</main>
    )
}




export default Admin;