import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from  './components/about'
import Admin from  './components/admin'
import Create from  './components/create'
import Home from  './components/home'
import Login from  './components/login'
import SingUp from  './components/signup'
import Update from  './components/update'
import Header from  './shared/header'
import Footer from  './shared/footer'

function App() {

  return (
    <>
      <div>
      <Header/>
      <Home/>
      <About/>
      <Admin/>
      <Create/>
      <Login/>
      <SingUp/>
      <Update/>
      <Footer/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
