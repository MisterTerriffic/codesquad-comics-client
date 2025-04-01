import books from "./src/data/books"
function Admin(){ 
<main>  
    <div class="box-design">
        <tr>
            {books.map((books) => (
                    <td>{books}</td>
             ))}
        </tr>
       {/* <h1>Admin Page</h1>
       <div className="center_button">
        <button>Add New Comic</button>
        </div>
        <table style="width:auto"> 
            <tr>
                <th>Comic Title</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>

            <tr>
                <td>Batman: The Dark Knight Returns</td>
                <td><button class="edit_button"> Edit</button></td>
                <td><button>Delete</button></td>
            </tr>

            <tr>
                <td>Black Panther: A Nation Under our Feet Book 1</td>
                <td><button class="edit_button"> Edit</button></td>
                <td><button>Delete</button></td>
            </tr>

            <tr>
                <td>Fun Home: A Family Tragicomic</td>
                <td><button class="edit_button"> Edit</button></td>
                <td><button>Delete</button></td>
            </tr>

            <tr>
                <td>Hunter X Hunter Vol. 1</td>
                <td><button class="edit_button"> Edit</button></td>
                <td><button>Delete</button></td>
            </tr>

        <tr>
            <td>Lumberjanes Vol. 1</td>
            <td><button class="edit_button"> Edit</button></td>
            <td><button>Delete</button></td>
        </tr>

                <tr>
                    <td>March: Book 1</td>
                    <td><button class="edit_button"> Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

        <tr>
            <td>One Piece, Vol 1: Romance Dawn</td>
            <td><button class="edit_button"> Edit</button></td>
            <td><button>Delete</button></td>
        </tr>

            <tr>
                <td>Parable of the Sower</td>
                <td><button class="edit_button"> Edit</button></td>
                <td><button>Delete</button></td>
            </tr>

                <tr>
                    <td>Queer: A Graphic History</td>
                    <td><button class="edit_button"> Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>

            <tr>
            <td>The Walking Dead Vol, 1:Days Gone Bye</td>
            <td><button class="edit_button"> Edit</button></td>
            <td><button>Delete</button></td>
            </tr>

            <tr>
            <td>Wake: The Hidden History of Women Led Slave Revolts</td>
            <td><button class="edit_button">Edit</button></td>
            <td><button>Delete</button></td>
            </tr>

            <tr>
            <td>Watchmen</td>
            <td><button class="edit_button"> Edit</button></td>
            <td><button>Delete</button></td>
            </tr>
        </table> */}
    </div>
</main>
}




export default Admin;