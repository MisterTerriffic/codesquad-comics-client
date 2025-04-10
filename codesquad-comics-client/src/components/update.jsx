import { useState } from "react";
import books from "../data/books";

function Update(){
    const id = "2d4f24ca-f395-461f-bc57-6a7ca61d63b9";
    const [bookData, setBookData] = useState("");
    
<main>
    <div className="box-design">
             <h1>Create New Comic</h1>
        <div>
            <form action="/action_page.php">

                <label for="title">Title:</label>
                <br><input type="text" id="title" name="title" value="Title value stored in database" placeholder="Title"></input></br>
                <label for="author">Author:</label>
                <br><input type="text" id="author" name="author" value="Author value stored in database" placeholder="Author"></input></br>
                <label for="publishers">Publisher:</label>
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


                <label for="genre">Genre:</label>
                <br><input type="text" id="genre" name="genre" value="Genre data stored in database" placeholder="Genre"></input></br>
                <label for="numofpages">Number of Pages</label>
                <br><input type="text" id="numofpages" name="numofpages" value="255" placeholder="Number of Pages"></input></br>
                <label for="rating">Rating:</label>
                <br><input type="text" id="rating" name="rating" value="5" maxlength="2" size="2"></input></br>
                <label for="synop">Synopsis:</label>
                <br><input type="text" id="synop" name="synop" value="Synopsis value stored in database" placeholder="Synopsis"></input></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
      </main>

}




export default Update;