import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(user, setUser) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    username: e.target.username.value,
    password: e.target.password.value,
  };

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

  const url =
    "https://course-project-codesquad-comics-server.onrender.com/signup";

  fetch(url, { method: "POST", body: JSON.stringify(body) })
    .then((response) => response.JSON())
    .then(() => {
      localStorage.setFirstName("first name", JSON.stringify(firstName));
      localStorage.setLastName("last name", JSON.stringify(lastName));
      localStorage.setUsername("username", JSON.stringify(username));
      localStorage.setPassword("password", JSON.stringify(password));
      navigate("/admin");
      console.log("Success");
    })
    .catch(console.log("Error"));

  return (
    <form onSubmit={SignUp}>
      <input
        type="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
}

export default SignUp;
