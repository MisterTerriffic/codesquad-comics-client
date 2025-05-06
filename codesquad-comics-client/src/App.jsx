import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from  './shared/Header'
import Home from  './components/Home'
import About from  './components/About'
import Admin from  './components/Admin'
import Create from  './components/Create'
import Login from  './components/Login'
import SignUp from  './components/Signup'
import Update from  './components/Update'
import Footer from  './shared/Footer'

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
      <div className="App">
        <Header user={user} setUser={setUser}/>
        <Routes>
        <Route path="/" index element= {<Home />} />
        {/* Kit: the home path has to be "/" */}
        <Route path="/about" element= {<About />} />
        <Route path="/admin" element= {<Admin />} />
        <Route path="/create" element= {<Create />} />
        <Route path="/login" element = {<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element = {<SignUp user={user} setUser={setUser} />} />
        <Route path="/update" element= {<Update />} />
        {/* <Route path ="*" element={<h1>Page not Found</h1>} /> */}
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
