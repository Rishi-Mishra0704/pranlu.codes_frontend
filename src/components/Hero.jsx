import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center text-md-left" data-aos="fade-up">
          <h1>
            Welcome to <span>Pranlu.codes</span>
          </h1>
          <h2 className="intro">
            We are team of talented developers dedicated to streamlining company
            operations through innovative and user-friendly applications,
            facilitating seamless business processes
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
