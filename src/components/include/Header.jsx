import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
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
            <Link to="/">
              <img src="/assets/img/logo-lifeline.webp" alt="Lifeline Logo" />
            </Link>
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
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-01.png" alt="menu-icon" /> Upper Gl Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-02.png" alt="menu-icon" /> HPB Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-02.png" alt="menu-icon" /> Digestive Cancer Care</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-04.png" alt="menu-icon" /> Colorectal Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-05.png" alt="menu-icon" /> Hernia</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-05.png" alt="menu-icon" /> Bariatric Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-07.png" alt="menu-icon" /> Diabetic Prevention/Reversal</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-08.png" alt="menu-icon" /> Laparoscopic Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-09.png" alt="menu-icon" /> Advanced Endoscopy</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-10.png" alt="menu-icon" /> Medical Gastroenterology</Link></li>
                    </ul>
                  </div>
                  <div className="mega-column bg-primary-light">
                    <ul>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-11.png" alt="menu-icon" /> General Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-11.png" alt="menu-icon" /> Nutrition/Dietetics</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-11.png" alt="menu-icon" /> Oncology & Onco-Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-14.png" alt="menu-icon" /> Obstertics & Gynaecology</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-15.png" alt="menu-icon" /> Urology</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-16.png" alt="menu-icon" /> Nephrology</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-17.png" alt="menu-icon" /> Pulmonology</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-18.png" alt="menu-icon" /> Orthopaedics</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-19.png" alt="menu-icon" /> Dermatology</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> Anesthesia & Pain Clinic</Link></li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <ul>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> Emergency Medicine</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> ENT</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-20.png" alt="menu-icon" /> Endocrine Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-24.png" alt="menu-icon" /> Oral & Maxillofacial Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-25.png" alt="menu-icon" /> Plastic Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-26.png" alt="menu-icon" /> Psychiatry</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-26.png" alt="menu-icon" /> Neurology</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-28.png" alt="menu-icon" /> Vascular Surgery</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-29.png" alt="menu-icon" /> Geriatrics</Link></li>
                      <li><Link to="/specialties"> <img src="/assets/img/menu-icon-30.png" alt="menu-icon" /> Cardiology</Link></li>
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