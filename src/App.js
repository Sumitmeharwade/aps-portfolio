import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import Home from "./Home";
import Header from "./Navbar";
import About from "./About";
import "./styles.css";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <div>
      <Header />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aps-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
