import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section" data-sal="fade" data-sal-duration="1000">
      <div className="container-fluid">
        <div className="video-wrapper">
          <video autoPlay muted loop className="background-video">
            <source src="/assets/video/playback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;