import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(user, setUser) {
  const navigate = useNavigate();

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

  const url =
    "https://course-project-codesquad-comics-server.onrender.com/login/local";

  fetch(url, { method: "POST", body: JSON.stringify() })
    .then((response) => response.JSON())
    .then(() => {
      localStorage.setFirstName("first name", JSON.stringify(firstName));
      localStorage.setLastName("last name", JSON.stringify(lastName));
      localStorage.setEmail("email", JSON.stringify(email));
      localStorage.setPassword("password", JSON.stringify(password));
      navigate("/admin");
      console.log("Success");
    })
    .catch(console.log("Error"));

  return (
    <form onSubmit={Login}>
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

export default Login;
