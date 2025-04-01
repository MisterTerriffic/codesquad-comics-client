function SignUp (){
    <main>
    <div className="box-design">
            <h1>Login</h1>
       <div>     
        <form>
        <label htmlFor="first name">First Name:</label>
           <br><input type="text" id="firstName" name="firstName" value=""
            placeholder="Last Name"></input></br>
            <label htmlFor="last name">Last Name:</label>
           <br><input type="text" id="lastName" name="lastName" value=""
            placeholder="Last Name"></input></br>
            <label htmlFor="email">Email Address:</label>
           <br><input type="text" id="email" name="email" value=""
            placeholder="Email"></input></br>
            <label htmlFor="password">Password:</label>
            <br><input type="text" id="password" name="password" value=""
            placeholder="Password"></input></br>
            <input type="submit" value="Submit"></input>
        </form>
       </div> 
    </div>
    </main>
}




export default SignUp;