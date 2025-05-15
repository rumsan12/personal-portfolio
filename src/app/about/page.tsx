import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook />, url: "https://www.facebook.com/asal.poudel.1/" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/asal_poudel/" },
  { icon: <FaGithub />, url: "https://www.github.com/asal99" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/asalpoudel/" },
];

const About = () => {
  return (
    <>
      {/* main div */}
      <div className="home-container">
        {/* left div */}
        <div className="home-left">
          <div className="text-content">
            <p className="about">About Me</p>
            <p className="description">
              I’m a passionate Front-End Developer with a strong eye for design
              and a love for clean, efficient code. I specialize in building
              responsive, user-centric web interfaces using technologies like
              HTML, CSS, JavaScript, and React. With experience turning ideas
              into pixel-perfect, mobile-friendly websites, I focus on creating
              seamless user experiences that combine functionality with
              aesthetics. Whether I’m optimizing performance or crafting
              intuitive layouts, I enjoy translating complex problems into
              elegant digital solutions. I believe in continuous learning and
              staying updated with the latest trends in UI/UX, accessibility,
              and front-end frameworks to deliver modern and maintainable
              products.
            </p>
            <div className="social-icons">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* right div */}

        <div className="home-right">
          <div className="image-wrapper">
            <img
              src="/myphoto.webp"
              alt="My Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
