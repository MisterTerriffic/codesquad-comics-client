function Login() {
    <main>
    <div className="box-design">
            <h1>Login</h1>
       <div>     
        <form>
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




export default Login;