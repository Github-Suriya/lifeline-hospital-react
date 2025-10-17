import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
  };

  return (
    <section
      className="banner-section"
      data-sal="fade"
      data-sal-duration="1000"
    >
      <Slider {...settings} className="banner-carousel">
        <div>
          <img src="/assets/img/banner.png" alt="banner" />
        </div>
        <div>
          <img src="/assets/img/banner.png" alt="banner" />
        </div>
        <div>
          <img src="/assets/img/banner.png" alt="banner" />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;