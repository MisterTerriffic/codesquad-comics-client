import { useState } from "react";
import books from "../data/books"

function Admin(){ 
    const [bookData, setBookData] = useState([]);

    return(
<main>  
    <div key={books._id} class="box-design">
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