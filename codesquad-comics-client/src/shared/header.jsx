import React from "react";
import { useNavigate, Link } from "react-router-dom";



function Header({user,setUser}){
    const navigate = useNavigate();

    const url = "https://course-project-codesquad-comics-server.onrender.com/logout";
    const handleLogout = () => {
        fetch(url, {method: "PUT", body: JSON.stringify(user)})
        .then((response) => response.json())
        .then((user) => {
            console.log("Success");
            localStorage.removeItem(user);
            
            setUser({});
            navigate("/");
        })
        .catch((error) => {
            console.log("Error", error)
            navigate("/admin");
        });
    }

    

        // function handleLogout(user){
        //     if(user.username === true){
        //         // <a href="#" onClick={handleLogout}>Logout</a>
        //         <a href="/admin" >Admin</a>

        //     }else{
        //         <a href="/login" >Login</a>
        //     }
        // }
    return(
        <header> 
    <div className="header-design">
    <Link to="/">
        <img src="/images/CodeSquad-Comics-logo.png" alt="CodeSquad-Comics-logo" width="300px">
    </img></Link>
    <nav className="navbar-design">
    <ul className="navbar" id="nav-menu">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        {user.username ? (
          <>
            <li>
              <Link to="/admin">ADMIN</Link>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                LOGOUT
              </a>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
    </nav>
    <a href="#" onClick={handleLogout}>Logout</a>
    <div className="menu-icon">
        <Link to="#">
        <i className="fa-solid fa-bars"></i>
        </Link>
    </div>
</div> 
</header>
    )
}

export default Header;