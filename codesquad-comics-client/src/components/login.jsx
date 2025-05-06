import React from "react";
import { useNavigate } from "react-router-dom";

function Login({user, setUser}) {
  const navigate = useNavigate();

  //Kit: establish the handler function
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    //define form body:
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    //fetch
    const url =
    "https://course-project-codesquad-comics-server.onrender.com/login/local";

    fetch(url, { method: "POST", body: JSON.stringify(body) })
      .then((response) => response.JSON())
      //Kit: incorrect
      /*
      .then(() => {
        localStorage.setFirstName("first name", JSON.stringify(firstName));
        localStorage.setLastName("last name", JSON.stringify(lastName));
        localStorage.setEmail("email", JSON.stringify(email));
        localStorage.setPassword("password", JSON.stringify(password));
        navigate("/admin");
        console.log("Success");
      })
      .catch(console.log("Error"));
      */
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        localStorage.setItem("user", JSON.stringify(result.data));
        setUser(result.data);
        navigate("/admin");
      })
      .catch((error) => console.log("error", error));

  }

  // Kit: this is not needed
  /*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    e.preventDefault();
    console.log("First Name", e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.preventDefault();
    console.log("Last Name", e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
    console.log("Email", e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
    console.log("Password", e.target.value);
  };
  */
   

  // Kit: for the Login page: you only needed the username and password
  return (
    // Kit: incorrect, you had the component {Login} here, which caused your code to break. We call the handleLoginFormSubmit handler function
    <form onSubmit={handleLoginFormSubmit}>
      {/* Kit: you did not have labels for your form */}
      <label htmlFor="username">Username:</label>
      <input
        type="text" id="username" name="username" placeholder="username"
        // incorrect:
        // type="email"
        // placeholder="Email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        //incorrect:
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
      />
      {/* Kit: you did not have a input as a button */}
      <input type="submit" />
    </form>
  );
}

export default Login;
