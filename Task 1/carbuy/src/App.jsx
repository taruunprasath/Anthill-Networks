import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import CarList from './components/Car/CarList'
import CarDetails from './components/Car/CarDetails'
import AboutPage from './components/About/About'
import ContactPage from './components/About/Contact'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/cars" element={<CarList />}/>
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
