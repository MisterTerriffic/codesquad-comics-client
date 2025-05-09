import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
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
        <Route path ="*" element={<h1>Page not Found</h1>} />
        {/* <Route path ="*" element={<h1>Page not Found</h1>} /> */}
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
