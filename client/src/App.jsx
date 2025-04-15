import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sell from "./components/Sell";
import Signup from "./components/Signup";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <div>
      <Router>
        <Navbar />
  
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sell" element={<Sell/>}/>
          <Route path="/register" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/signup" element={<Signup />} /> */}

          {/* <Route path="/about" element={<About />} /> */}

          {/* <Route path="/login" element={<Login />} /> */}
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
