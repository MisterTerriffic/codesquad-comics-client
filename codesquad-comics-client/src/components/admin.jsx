import books from "../data/books"
function Admin(){ 
    return(
<main>  
    <div className="box-design">
    {books.map((books) => (
        <tr>
            <td>{books.title}</td>
            <td>{books.author}</td>
            <td>{books.publisher}</td>
            <td>{books.genre}</td>
            <td>{books.pages}</td>
            <td>{books.rating}</td>
            <td>{books.synopsis}</td>
        </tr>
    ))}
    </div>
</main>
    )
}




export default Admin;