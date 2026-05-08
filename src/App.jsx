import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Layout/Header'
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import AnnouncementBar from './Components/Home/AnnouncementBar';
import AboutUs from './Pages/AboutUs';
import Whatsapp from './Components/Common/Whatsapp';
import ContactUs from './Pages/ContactUs';  
import Track from './Pages/Track';  
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
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
        <Route path="/track" element={<Track />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />

    </BrowserRouter>


  );
};

export default App