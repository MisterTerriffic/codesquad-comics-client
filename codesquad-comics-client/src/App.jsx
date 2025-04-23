import { useEffect, useState } from 'react';
import './App.css'
import Header from  './shared/header'
import Home from  './components/home'
import About from  './components/about'
import Admin from  './components/admin'
import Create from  './components/create'
import Login from  './components/login'
import SignUp from  './components/signup'
import Update from  './components/update'
import Footer from  './shared/footer'

function App() {
  const [user, setUser] = useState(1);
  localStorage.setItem("user", user);

  return (
    <>
      <div>
        <Header user={user} setUser={setUser}/>
        <Home/>
        <About/>
        <Admin/>
        <Create/>
        <Login user={user} setUser={setUser}/>
        <SignUp user={user} setUser={setUser}/>
        <Update/>
        <Footer/>
      </div>
    </>
  )
}

export default App
