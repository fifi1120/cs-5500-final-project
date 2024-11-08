import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking/Booking';
import CoffeeBasics from './components/pages/CoffeeBasics';
import SignUp from './components/pages/SignUp/SignUp';
import Gallery from './components/pages/Gallery';
import ShoppingCart from "./components/pages/ShoppingCart/ShoppingCart";


function App() {
  return (

    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='coffee-basics' element={<CoffeeBasics />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path="/cart" element={<ShoppingCart />} /> 
        </Routes>




      </Router>
    </>




  );
}

export default App;