import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp({user, setUser}) {
  const navigate = useNavigate();

  //Kit: state is not needed here
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // not needed
  /*
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
  const handleUsername = (e) => {
    setUsername(e.target.value);
    e.preventDefault();
    console.log("Email", e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
    console.log("Password", e.target.value);
  };

  */

  //Kit: establish handler function
  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    //Kit: correct
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    //check the body
    console.log(JSON.stringify(body))

    //url and fetch
    const url =
    "https://course-project-codesquad-comics-server.onrender.com/signup";

  fetch(url, { method: "POST", body: JSON.stringify(body) })
    .then((response) => response.JSON())
    .then((result) => { //Kit: add params of result
      //correct:
      console.log("result", result);
        localStorage.setItem("user", JSON.stringify(result.data));
        setUser(result.data);
        navigate("/admin");
      //Kit: incorrect
      // localStorage.setFirstName("first name", JSON.stringify(firstName));
      // localStorage.setLastName("last name", JSON.stringify(lastName));
      // localStorage.setUsername("username", JSON.stringify(username));
      // localStorage.setPassword("password", JSON.stringify(password));
      // navigate("/admin");
      // console.log("Success");
    })
    .catch( (error) => {(console.log("Error", error))});

  }
  
  

  return (
    // Kit: incorrect, you were calling the {SignUp}component as the parameter
    <form onSubmit={handleSignupFormSubmit}>
       {/* Kit: you did not have labels for your form, nor required */}
       <label htmlFor="firstName">First Name</label>
      <input
        type="text" //type should be text
        placeholder="First Name"
        name="firstName" id="firstName" required     
        //incorrect
        // value={firstName}
        // onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text" //type should be text
        placeholder="Last Name"
        name="lastName" id="lastName" required    
        //incorrect  
        // value={lastName}
        // onChange={(e) => setLastName(e.target.value)}
      />
       <label htmlFor="username">Username</label>
      <input
        type="text" //type should be text
        placeholder="Username"
        name="username" id="username" required
        //incorrect
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text" //type should be text
        placeholder="Password"
        name="password" id="password" required
        //incorrect
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      {/* Kit: you did not have a button */}
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignUp;
