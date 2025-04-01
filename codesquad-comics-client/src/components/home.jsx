import books from "./src/data/books"
function home() {
    <main>
            <div className="box-design">
                <h1>Codesquad Comics</h1>
            <p> CodeSquad Comics is a collection of graphic novels read by Walter. Copyrighted images are used for review purposes only. 
                Meta information about this collection can be found below. A detailed list of all the graphic novels in this collection 
                can be found on the homepage. Additional details about each comic book, including the author, genre, number of pages, and 
                a brief synopsis, can be found by navigating to the homepage and clicking the image of the book cover or the Details link 
                for the desired graphic novel.
            </p>
            </div>
    <div className="box-design">
    <ul>
        {books.map((books) => (
                <li>{books}</li>
            ))}
        </ul>
    </div>
    {/* <main>
            <div class="box-design">
                <h1>Codesquad Comics</h1>
            <p> CodeSquad Comics is a collection of graphic novels read by Walter. Copyrighted images are used for review purposes only. 
                Meta information about this collection can be found below. A detailed list of all the graphic novels in this collection 
                can be found on the homepage. Additional details about each comic book, including the author, genre, number of pages, and 
                a brief synopsis, can be found by navigating to the homepage and clicking the image of the book cover or the Details link 
                for the desired graphic novel.
            </p>
            </div>
    <div class="box-design">
        <h1>Complete Comic Collection</h1>
        <div class="comic-container">
        <a href="#">
        <img src="./public/images/fun-home.jpg" alt="Fun Home" style="width:200px;">
        </a><br>
        <a href="#"></a>
            <i>Fun Home: A Family Tragicomic</i><br>
            <a href="#"></a>
            by Alison Bechdel<br>
            <a href="#"></a>
            5 Stars<br>
        <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <img src="./public/images/watchmen.jpg" alt="Watchmen" style="width:200px;">
            </a><br>
            <a href="#"></a>
            <i>Watchmen</i><br>
            <a href="#"></a>
            by Alan Moore<br>
            <a href="#"></a>
            5 Stars<br>
        <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <img src="./public/images/hunter-x-hunter.jpg" alt="hunter-x-hunter" style="width:200px;">
            </a><br>
            <a href="#"></a>
            <i>Hunter X Hunter Vol 1</i><br>
            <a href="#"></a>
            by Yoshihiro Togashi<br>
            <a href="#"></a>
            5 Stars<br>
        <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <img src="./public/images/lumberjanes.jpg" alt="Lumberjanes" style="width:200px;">
            </a><br>
            <a href="#"></a>
            <i>Lumberjanes</i><br>
            <a href="#"></a>
            by Noelle Stevenson<br>
            <a href="#"></a>
            4 Stars<br>
        <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <img src="./public/images/one-piece.jpg" alt="one-piece" style="width:200px;">
            </a><br>
            <a href="#"></a>
            <i>One Piece, Vol 1: Romance Dawn</i><br>
            <a href="#"></a>
            by Eiichiro Oda<br>
            <a href="#"></a>
            5 Stars<br>
        <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
         <a href="#">
        <img src="./public/images/wake.jpg" alt="Wake" style="width:200px;">
        </a><br>
        <a href="#"></a>
        <i>Wake</i><br>
        <a href="#"></a>
        by Rebecca Hall<br>
        <a href="#"></a>
        4 Stars<br>
         <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <a href="black-panther.html" target="_blank">
            <img src="./public/images/black-panther.jpg" alt="black-panther" style="width:200px;">
            </a>
            </a><br>
            <a href="#"></a>
            <i>Black Panther: A Nation Under Our Feet Book 1</i><br>
            <a href="#"></a>
            by Ta-Nehisi Coates<br>
            <a href="#"></a>
            3 Stars<br>
        <a href="black-panther.html">Details</a><br>
        </div>
        <div class="comic-container">
            <a href="#">
                <img src="./public/images/the-walking-dead.jpg" alt="the-walking-dead" style="width:200px;">
                </a><br>
                <a href="#"></a>
                <i>The Walking Dead, Vol 1: Days Gone By</i><br>
                <a href="#"></a>
                by Robert Kirkman<br>
                <a href="#"></a>
                4 Stars<br>
            <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <img src="./public/images/march.jpg" alt="march" style="width:200px;">
            </a><br>
            <a href="#"></a>
            <i>March Book One</i><br>
            <a href="#"></a>
            by John Lewis<br>
            <a href="#"></a>
            5 Stars<br>
        <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
            <a href="#">
                <img src="./public/images/batman.jpg" alt="batman" style="width:200px;">
                </a><br>
                <a href="#"></a>
                <i>Batman: The Dark Knight Returns</i><br>
                <a href="#"></a>
                by Frank Miller<br>
                <a href="#"></a>
                3 Stars<br>
            <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
        <a href="#">
            <img src="./public/images/queer.jpg" alt="queer" style="width:200px;">
            </a><br>
            <a href="#"></a>
            <i>Queer: A Graphic History</i><br>
            <a href="#"></a>
            by Meg-John Baker<br>
            <a href="#"></a>
            4 Stars<br>
            <a href="#">Details</a><br>
        </div>
        <div class="comic-container">
            <a href="#">
                <img src="./public/images/parable-of-the-sower.jpg" alt="parable-of-the-sower" style="width:200px;">
                </a><br>
                <a href="#"></a>
                <i>Parable of the Sower</i><br>
                <a href="#"></a>
                by Octavia E. Butler<br>
                <a href="#"></a>
                4 Stars<br>
            <a href="#">Details</a><br>
        </div>
        <div class="displaymore-button">
        <button>Display More</button>
        </div>
    </div>
        </main> */}
        </main>
}




export default home;