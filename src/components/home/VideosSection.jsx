import React from "react";
import Slider from "react-slick";

const videos = [
  {
    src: "https://www.youtube.com/embed/U78T7297RHo?si=VJ1mRx5ptuusLsSz",
    name: "Dr. JS Rajkumar",
    title: "Chairman & Chief Surgeon",
    delay: 100,
  },
  {
    src: "https://www.youtube.com/embed/nmo9xUvaDPU?si=geVNyL_Mhp8RAji3",
    name: "Dr. Anirudh Rajkumar",
    title: "Advanced Robotic & Laparoscopic Surgeon",
    delay: 300,
  },
  {
    src: "https://www.youtube.com/embed/DD8Z-KzppEw?si=rmkgIZHeIvJKaGWR",
    name: "Dr. K. P. Dinakaran",
    title: "Sr. CONSULTANT DIABETOLOGIST",
    delay: 500,
  },
  {
    src: "https://www.youtube.com/embed/U78T7297RHo?si=VJ1mRx5ptuusLsSz",
    name: "Dr. JS Rajkumar",
    title: "Chairman & Chief Surgeon",
    delay: 100,
  },
  {
    src: "https://www.youtube.com/embed/nmo9xUvaDPU?si=geVNyL_Mhp8RAji3",
    name: "Dr. Anirudh Rajkumar",
    title: "Advanced Robotic & Laparoscopic Surgeon",
    delay: 300,
  },
  {
    src: "https://www.youtube.com/embed/DD8Z-KzppEw?si=rmkgIZHeIvJKaGWR",
    name: "Dr. K. P. Dinakaran",
    title: "Sr. CONSULTANT DIABETOLOGIST",
    delay: 500,
  },
];

const VideosSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <button type="button" className="slick-prev"><i className="fa-solid fa-chevron-left"></i></button>,
    nextArrow: <button type="button" className="slick-next"><i className="fa-solid fa-chevron-right"></i></button>,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="progress-section videos-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
              Healing Begins with Knowledge
            </h2>
            <p className="section-subtitle" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
              Expert Insights from Our Doctors
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div className="videos-slide" key={index} data-sal="slide-up" data-sal-duration="1000" data-sal-delay={video.delay}>
              <iframe
                src={video.src}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h3>{video.name}</h3>
              <p>{video.title}</p>
            </div>
          ))}
        </Slider>
        <div className="col-12 text-center mt-5">
          <a href="#" className="about-btn" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
            More Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;