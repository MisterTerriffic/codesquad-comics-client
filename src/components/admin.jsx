import { useState, useEffect } from "react";
import Books from "../data/books"

function Admin(){ 
    const [bookData, setBookData] = useState([]);

    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books";

    const deleteUrl = `https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`;

    useEffect(() => {
        setBookData(bookData);
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setBookData(result.data.Books);
            console.log(result.data.Books);
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
    <div key={Books._id} className="box-design">
    {Books.map((Books) => (
        <tr>
            <td>{Books.title}</td>
            <td>{Books.author}</td>
            <td>{Books.publisher}</td>
            <td>{Books.genre}</td>
            <td>{Books.pages}</td>
            <td>{Books.rating}</td>
            <td>{Books.synopsis}</td>
        </tr>
    ))}
    </div>
</main>
    )
}




export default Admin;