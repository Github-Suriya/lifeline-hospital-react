import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  // Local state to track which icon is active
  const [activeIcon, setActiveIcon] = useState(null);
  const containerRef = useRef(null);

  // Data for each icon’s popup content
  const iconData = [
    {
      id: 1,
      img: "/assets/img/spacialities-icon-05.png",
      title: "Advanced Endoscopy",
      description:
        "Our specialists use state-of-the-art endoscopic tools for accurate diagnosis and minimally invasive treatment of digestive conditions.",
    },
    {
      id: 2,
      img: "/assets/img/spacialities-icon-06.png",
      title: "Liver & Pancreas Care",
      description:
        "Comprehensive care for liver, gallbladder, and pancreas disorders led by experienced gastroenterologists.",
    },
    {
      id: 3,
      img: "/assets/img/spacialities-icon-03.png",
      title: "Colorectal Surgery",
      description:
        "Expertise in treating colorectal diseases with both surgical and non-surgical methods, ensuring faster recovery.",
    },
    {
      id: 4,
      img: "/assets/img/spacialities-icon-03.png",
      title: "Digestive Health",
      description:
        "From acid reflux to complex GI issues, our specialists deliver personalized care with advanced technology.",
    },
    {
      id: 5,
      img: "/assets/img/spacialities-icon-04.png",
      title: "Gallbladder Treatments",
      description:
        "Specialized in laparoscopic gallbladder removal and management of related digestive disorders.",
    },
    {
      id: 6,
      img: "/assets/img/spacialities-icon-01.png",
      title: "Nutritional Support",
      description:
        "Our team provides dietary and lifestyle guidance to support digestive wellness and recovery.",
    },
  ];

  // Detect click outside to reset the active state
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveIcon(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="gastro-care-banner">
      <div className="container">
        {/* Text Content */}
        <div className="text-content">
          <h1 data-sal="fade" data-sal-duration="800" data-sal-delay="200">Expert Gastro Care</h1>
          <p data-sal="fade" data-sal-duration="800" data-sal-delay="400">
            At Lifeline Hospital, our Gastroenterology specialists provide
            advanced diagnosis and treatment for digestive health issues. From
            acid reflux to liver disorders, we ensure personalized care with
            cutting-edge technology.
          </p>

          <div className="button-group" data-sal="slide-up" data-sal-duration="800" data-sal-delay="600">
            <a href="tel:9677222333" className="btn btn-secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.556 12.845c-1.25-.614-2.583-1.075-3.962-1.343a.75.75 0 00-.813.43l-.444 1.11a10.887 10.887 0 01-4.688-4.688l1.11-.444a.75.75 0 00.43-.813c-.268-1.38-.73-2.712-1.343-3.962a.75.75 0 00-.735-.488L4.62 3.033a.75.75 0 00-.749.613A17.935 17.935 0 0019.61 20.125a.75.75 0 00.613-.749l.38-1.495a.75.75 0 00-.488-.735z"></path>
              </svg>
              96 77 222 333
            </a>
            <a href="#" className="btn btn-secondary">Book Appointment</a>
          </div>
        </div>

        {/* Image and Orbit Icons */}
        <div className="image-content" ref={containerRef} data-sal="zoom-in" data-sal-duration="1000" data-sal-delay="300">
          <div className="orbit-container">
            {/* Main Display Area */}
            <div className={`main-display ${activeIcon ? 'active' : ''}`}>
              {activeIcon ? (
                <div className="icon-content fade-in">
                  <h3>{iconData.find((i) => i.id === activeIcon)?.title}</h3>
                  <p>{iconData.find((i) => i.id === activeIcon)?.description}</p>
                </div>
              ) : (
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Surgical procedure"
                  className="main-image"
                />
              )}
            </div>

            {/* Orbit Icons */}
            {iconData.map((icon, index) => (
              <div
                key={icon.id}
                className={`icon-wrapper icon-${index + 1} ${
                  activeIcon === icon.id ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // prevent outer click
                  setActiveIcon(icon.id);
                }}
              >
                <img src={icon.img} alt={`icon-${icon.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
