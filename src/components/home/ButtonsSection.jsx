import React from "react";

const ButtonsSection = () => {
  return (
    <div className="container">
      <section className="buttons-section py-2">
        <div className="buttons-container">
          <button
            className="pink-btn"
            data-sal="slide-down"
            data-sal-duration="2000"
          >
            <i className="fa-solid fa-calendar-check me-2"></i>
            Book Appointment
          </button>
          <button
            className="gray-btn"
            data-sal="slide-down"
            data-sal-duration="2000"
            data-sal-delay="100"
          >
            <i className="fa-solid fa-user-doctor me-2"></i>
            Find a Doctor
          </button>
          <button
            className="pink-btn"
            data-sal="slide-down"
            data-sal-duration="2000"
            data-sal-delay="200"
          >
            <i className="fa-solid fa-calendar-check me-2"></i>
            Emergency care
          </button>
        </div>
      </section>
    </div>
  );
};

export default ButtonsSection;