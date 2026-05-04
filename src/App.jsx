import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Layout/Header'
// import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import AnnouncementBar from './Components/Home/AnnouncementBar';
import AboutUs from './Pages/AboutUs';


const App = () => {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>


  );
};

export default App