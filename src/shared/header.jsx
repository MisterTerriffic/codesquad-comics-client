import { useNavigate, Link } from "react-router-dom";



function Header(user,setUser){
    const navigate = useNavigate();

    const url = "https://course-project-codesquad-comics-server.onrender.com/logout";

    fetch(url, {method: "PUT", body: JSON.stringify(user)})
        .then((response) => response.json())
        .then((user) => {
            setUser({});
            localStorage.removeItem(user);
            console.log("Success");
            navigate("/");
        })
        .catch(() => {
            console.log("Error")
            navigate("/admin");
        });

        function handleLogout(user){
            if(user.username === true){
                // <a href="#" onClick={handleLogout}>Logout</a>
                <a href="/admin" >Admin</a>

            }else{
                <a href="/login" >Login</a>
            }
        }
<header> 
    <div className="header-design">
    <Link to="/" target="">
        <img src="./public/images/CodeSquad-Comics-logo.png" alt="CodeSquad-Comics-logo" width="300px">
    </img></Link>
    <nav className="navbar-design">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <a href="#">Logout</a>
    </nav>
    <a href="#" onClick={handleLogout}>Logout</a>
    <div className="menu-icon">
        <Link to="#">
        <i className="fa-solid fa-bars"></i>
        </Link>
    </div>
</div> 
</header>
}

export default Header;