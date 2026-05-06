import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Layout/Header'
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import AnnouncementBar from './Components/Home/AnnouncementBar';
import AboutUs from './Pages/AboutUs';
import Whatsapp from './Components/Common/Whatsapp';
import ContactUs from './Pages/ContactUs';  
const App = () => {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Header />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

    </BrowserRouter>


  );
};

export default App