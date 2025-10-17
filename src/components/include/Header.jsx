import React, { useEffect } from "react";
import sal from "sal.js";
import GLightbox from "glightbox";

const Header = () => {
  useEffect(() => {
    // Initialize animations
    sal({ threshold: 0.2, once: true });

    // Initialize lightbox (if you’ll use it later)
    GLightbox();

    // Hamburger + Dropdown logic
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const dropdown = document.querySelector(".dropdown");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
      });
    }

    if (dropdown) {
      dropdown.addEventListener("click", (e) => {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          dropdown.classList.toggle("active");
        }
      });
    }
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="inner-header">
          {/* Logo */}
          <div className="logo" data-sal="fade" data-sal-duration="1000">
            <img src="/assets/img/logo-lifeline.webp" alt="Lifeline Logo" />
          </div>

          {/* Hamburger */}
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation */}
          <nav className="nav" id="nav-menu">
            <ul>
              <li
                className="main-menu dropdown"
                data-sal="fade"
                data-sal-duration="1000"
              >
                <a href="/">
                  SPECIALTIES <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className="mega-menu">
                  <div className="mega-column">
                    <ul>
                      <li><a href="/"> <img src="/assets/img/menu-icon-01.png" alt="menu-icon" /> Upper Gl Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-02.png" alt="menu-icon" /> HPB Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-02.png" alt="menu-icon" /> Digestive Cancer Care</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-04.png" alt="menu-icon" /> Colorectal Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-05.png" alt="menu-icon" /> Hernia</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-05.png" alt="menu-icon" /> Bariatric Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-07.png" alt="menu-icon" /> Diabetic Prevention/Reversal</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-08.png" alt="menu-icon" /> Laparoscopic Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-09.png" alt="menu-icon" /> Advanced Endoscopy</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-10.png" alt="menu-icon" /> Medical Gastroenterology</a></li>
                    </ul>
                  </div>
                  <div className="mega-column bg-primary-light">
                    <ul>
                      <li><a href="/"> <img src="/assets/img/menu-icon-11.png" alt="menu-icon" /> General Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-11.png" alt="menu-icon" /> Nutrition/Dietetics</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-11.png" alt="menu-icon" /> Oncology & Onco-Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-14.png" alt="menu-icon" /> Obstertics & Gynaecology</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-15.png" alt="menu-icon" /> Urology</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-16.png" alt="menu-icon" /> Nephrology</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-17.png" alt="menu-icon" /> Pulmonology</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-18.png" alt="menu-icon" /> Orthopaedics</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-19.png" alt="menu-icon" /> Dermatology</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> Anesthesia & Pain Clinic</a></li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <ul>
                      <li><a href="/"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> Emergency Medicine</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> ENT</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> Endocrine Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-24.png" alt="menu-icon" /> Oral & Maxillofacial Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-25.png" alt="menu-icon" /> Plastic Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-26.png" alt="menu-icon" /> Psychiatry</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-26.png" alt="menu-icon" /> Neurology</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-28.png" alt="menu-icon" /> Vascular Surgery</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-29.png" alt="menu-icon" /> Geriatrics</a></li>
                      <li><a href="/"> <img src="/assets/img/menu-icon-30.png" alt="menu-icon" /> Cardiology</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li
                className="main-menu"
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <a href="/">BARIATRICS / METABOLICS</a>
              </li>

              <li
                className="main-menu"
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="200"
              >
                <a href="/">HEALTH PACKAGES</a>
              </li>
            </ul>
          </nav>

          {/* Header Buttons */}
          <div className="header-buttons">
            <a
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-delay="300"
              href="/"
              className="theme-btn pink"
            >
              APPOINTMENTS
            </a>
            <a
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-delay="400"
              href="/"
              className="theme-btn red p-0"
            >
              <i className="fa-solid fa-truck-medical"></i>{" "}
              <span className="emergency">EMERGENCY</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;