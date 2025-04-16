import { useState } from "react";

function SignUp (user, setUser){
    const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
    
        const handleFirstName = (e) => {
            setFirstName(e.target.value);
            e.preventDefault();
            console.log("First Name", e.target.value);
        }
        const handleLastName = (e) => {
            setLastName(e.target.value);
            e.preventDefault();
            console.log("Last Name", e.target.value);
        }
        const handleUsername = (e) => {
            setUsername(e.target.value);
            e.preventDefault();
            console.log("Email", e.target.value);
        }
        const handlePassword = (e) => {
            setPassword(e.target.value);
            e.preventDefault();
            console.log("Password", e.target.value);
        }


return (      
    <form onSubmit={SignUp}>
        <input type="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> 
        <input type="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
    );
}




export default SignUp;