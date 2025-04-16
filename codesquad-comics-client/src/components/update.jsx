import { useState, useEffect } from "react";
import booksData from "../data/books";

function Update(){
    const id = "2d4f24ca-f395-461f-bc57-6a7ca61d63b9";
    const [booksData, setBookData] = useState({
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
        setBookData(foundBook);
      }, [booksData]);
  
    const handleBookData = (e) => {
        e.preventDefault();
        console.log(setBookData(e.target.value));
        console.log("Book Data Successful");
        
    }

return (
<main>
    <div className="box-design">
             <h1>Create New Comic</h1>
        <div>
            <form action="/action_page.php" onSubmit={handleBookData}>

                <label htmlFor="title">Title:</label>
                <br><input type="text" id="title" name="title" value="Title value stored in database" placeholder="Title" required></input></br>
                <label htmlFor="author">Author:</label>
                <br><input type="text" id="author" name="author" value="Author value stored in database" placeholder="Author" required></input></br>
                <label htmlFor="publishers">Publisher:</label>
               <br><select id="publishers">
                <option value="Boom Box">BOOM!Box</option>
                <option value="DC">DC Comics</option>
                <option value="HNA">Harry N. Abrams</option>
                <option value="Icon Books">Icon Books</option>
                <option value="Image Comics">Image Comics</option>
                <option value="Marvel">Marvel</option>
                <option value="Simon & Schuster">Simon & Schuster</option>
                <option value="Top Shelf Productions">Top Shelf Productions</option>
                <option value="VIZ Media LLC">VIZ Media LLC</option>
                <option value="Publisher value stored in database"selected disabled>Publisher value stored in database</option>
               </select></br>


                <label htmlFor="genre">Genre:</label>
                <br><input type="text" id="genre" name="genre" value="Genre data stored in database" placeholder="Genre" required></input></br>
                <label htmlFor="numberofpages">Number of Pages</label>
                <br><input type="text" id="numberofpages" name="numberofpages" value="255" placeholder="Number of Pages" required></input></br>
                <label htmlFor="rating">Rating:</label>
                <br><input type="text" id="rating" name="rating" value="5" maxlength="2" size="2" required></input></br>
                <label htmlFor="synop">Synopsis:</label>
                <br><input type="text" id="synop" name="synop" value="Synopsis value stored in database" placeholder="Synopsis" required></input></br>
                <button type="submit">Update</button>
            </form>
        </div>
    </div>
      </main>

)}




export default Update;