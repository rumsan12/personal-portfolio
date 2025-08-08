"use client";
import React from "react";
import "./style.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* main div */}
      <div id="home" className="home-container">
        {/* left div */}
        <div className="home-left">
          <div className="image-wrapper">
            <img
              src="/myphoto.webp"
              alt="My Profile"
              className="profile-image"
            />
          </div>
        </div>

        {/* right div */}
        <div className="home-right">
          <div className="text-content">
            <div className="heading-text">
              <p className="bold">
                My <br /> Portfolio
              </p>
            </div>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Long versions of Lorem Ipsum.
            </p>
            <div className="cta-section">
              <button
                className="desk"
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="section about-section">
        <h2>About Me</h2>
        <p className="short-intro">
          I'm a passionate web developer who loves building responsive and
          interactive web applications. With a strong focus on design,
          performance, and usability, I turn ideas into elegant digital
          experiences.
        </p>
        <p className="cta-line">Wanna know more about me</p>
        <div style={{ marginTop: "20px" }}></div>
        <Link href="/about" className="desk">
          Explore More
        </Link>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="section portfolio-section">
        <h2>Portfolio</h2>
        <p className="portfolio-desc">
          Here are some of my recent projects that showcase my skills in React,
          Next.js, and responsive design. Each project is built with attention
          to detail and a focus on clean code.
        </p>
        <div className="project-scroll-wrapper">
          <div className="project-card">
            <img
              src="/myphoto.webp"
              alt="Project Logo"
              className="project-logo"
            />
            <h3>PROJECT NAME</h3>
            <p className="short-desc">Short Description</p>
            <p className="long-desc">Longer-description</p>
            <button
              className="know-more-btn"
              onClick={() => window.open("https://github.com/", "_blank")}
            >
              Explore More
            </button>
          </div>

          <div className="project-card">
            <img
              src="/myphoto.webp"
              alt="Project Logo"
              className="project-logo"
            />
            <h3>PROJECT NAME</h3>
            <p className="short-desc">Short Description</p>
            <p className="long-desc">Longer-description</p>
            <button
              className="know-more-btn"
              onClick={() => window.open("https://github.com/", "_blank")}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
