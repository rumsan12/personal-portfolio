import React from 'react';
import "./style.css";

const Portfolio = () => {
  return (
  <>
  <div className='portfolio-section'>
    <h1 className='portfolio-title'> Portfolio list</h1>
    <div className='title-underline'></div>


    <div className="portfolio-grid">
      <div className="portfolio-card">
        <img src="/myphoto.webp" alt="portfolio" />
        <h3>Portfolio 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nesciunt 
          accusantium inventore eius itaque perspiciatis est molestiae autem, officiis excepturi.</p>
      </div>
      <div className="portfolio-card">
          <img src="/myphoto.webp" alt="Portfolio 02" />
          <h3>Portfolio 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          </div>
    </div>

  </div>
    
   
    </>
  )
}

export default Portfolio