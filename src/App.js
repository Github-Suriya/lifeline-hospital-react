import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/include/Header";
import Footer from "./components/include/Footer";
import ContactSection from "./components/include/ContactSection";
import Home from "./components/home/Home";
import Specialties from "./components/specialties/Specialties";
import ScrollAndSal from "./components/util/ScrollAndSal";

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorsList from "./components/doctorsList/DoctorsList";

function App() {
  return (
    <Router>
        <Header />
        <ScrollAndSal>
          <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/doctorslist" element={<DoctorsList />} />
              </Routes>
          </main>
          <ContactSection />
          <Footer />
        </ScrollAndSal>
    </Router>
  );
}

export default App;
