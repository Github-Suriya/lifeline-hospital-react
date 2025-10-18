import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-md-3">
            <div className="logo" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
              <img src="./assets/img/logo-lifeline.webp" alt="Lifeline Hospital Logo" />
            </div>
            <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
              Lifeline Hospital redefines corporate healthcare with world-class expertise and global benchmarks in medical excellence, delivering advanced, patient-first care with precision and trust. Experience the future of healthcare, where technology meets compassion.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mt-5 ps-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
            <h5>CONTACT US</h5>
            <ul className="list-unstyled contact-info mb-3">
              <li className="mb-2">
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>47/3, New Avadi Road, Kilpauk, <br /> Chennai, Tamil Nadu 600010.</strong>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                <a href="mailto:info@lifelinehospital.com"><strong>info@lifelinehospital.com</strong></a>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-phone me-2"></i>
                <div className="d-flex flex-column contact-number">
                  <a href="tel:04442949495"><strong>044 4294 9495</strong></a>
                  <a href="tel:9677222333"><strong>96 77 222 333</strong></a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mt-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
            <h5>QUICK LINKS</h5>
            <ul className="footer-links gap-3">
              <li><a href="#">Home</a></li>
              <li><a href="#">Book an Appointment</a></li>
              <li><a href="#">Find a Doctor</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Appointment Form */}
          <div className="col-md-4 mt-5" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            <div className="appointment-box">
              <h3 className="form-header">Book an Appointment</h3>
              <div className="p-4">
                <form>
                  <input type="text" className="form-control mb-2" placeholder="Name:" required />
                  <input type="text" className="form-control mb-2" placeholder="Phone No:" required />
                  <input type="date" className="form-control mb-3" placeholder="Date:" required />
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="consentCheck" defaultChecked />
                    <label className="form-check-label" htmlFor="consentCheck">
                      <i className="fa-solid fa-circle-check me-1"></i>
                      I consent to get contacted from Lifeline Multispeciality Hospitals.
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="about-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons - Full width row */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="social-icons d-flex align-items-center justify-content-center" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
              <span className="follow-us me-3">FOLLOW US:</span>
              <a href="#" className="me-2"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="me-2"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;