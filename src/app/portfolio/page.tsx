"use client";
import "./style.css";
import React, { useRef } from "react";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const portfolioCard = [
    {
      image: "/myphoto.webp",
      title: "portfolio 1",
      description: "This is description for project 1",
      github: "https://github.com/Asal99/recipe-finder",
    },
    {
      image: "/myphoto.webp",
      title: "portfolio 2",
      description: "This is dispcription for project 2",
      github: "https://github.com/Asal99/recipe-finder",
    },
    {
      image: "/myphoto.webp",
      title: "portfolio 3",
      description: "This is dispcription for project 3",
      github: "https://github.com/Asal99/recipe-finder",
    },
    {
      image: "/myphoto.webp",
      title: "portfolio 4",
      description: "This is dispcription for project 4",
      github: "https://github.com/Asal99/recipe-finder",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="portfolio-section">
        <h1 className="portfolio-title"> Portfolio list</h1>
        <div className="title-underline"></div>

        <div className="portfolio-scroll-wrapper">
          <button className="scroll-btn" onClick={() => scroll("left")}>
            ←
          </button>

          <div className="portfolio-scroll-container" ref={portfolioRef}>
            <div className="portfolio-grid">
              {portfolioCard.map((item, index) => (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card"
                  key={index}
                >
                  <div className="portfolio-card">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <button className="scroll-btn" onClick={() => scroll("right")}>
            →
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
