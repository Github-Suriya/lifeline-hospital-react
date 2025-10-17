import React from "react";
import Header from "./components/include/Header";
import Banner from "./components/home/Banner";
import ButtonsSection from "./components/home/ButtonsSection";
import VideoSection from "./components/home/VideoSection";
import AboutSection from "./components/home/AboutSection";
import ProgressSection from "./components/home/ProgressSection";
import CareSection from "./components/home/CareSection";
import SpecialitySection from "./components/home/SpecialitySection";
import DoctorsSection from "./components/home/DoctorsSection";

function App() {
  return (
    <>
    <Header />
      <main>
        <Banner />
        <ButtonsSection />
        <VideoSection />
        <AboutSection />
        <ProgressSection />
        <CareSection />
        <SpecialitySection />
        <DoctorsSection />
      </main>
    </>
  );
}

export default App;