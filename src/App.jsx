import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import ChooseUs from './chooseus'
import Booking from './Booking'
import CarHiring from './carHiring'
import Staff from './staff'
import Review from './Review'
import Footer from './Footer'
import LandingPage from './LandingPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/landingpage' element={<LandingPage/>}/>
          <Route path='/chooseus' element={<ChooseUs/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/carhiring' element={<CarHiring/>}/>
          <Route path='/staff' element={<Staff/>}/>
          <Route path='/review' element={<Review/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
