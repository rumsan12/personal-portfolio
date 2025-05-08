import React from 'react';
import "./style.css";


const Home = () => {
  return (
    <>
      {/* main div */}
      <div className='home-container'>

        {/* left div */}
        <div className='home-left'>
          <div className='image-wrapper'>
          <img src="/myphoto.webp" alt="My Profile" className="profile-image" />


          </div>
        </div>

        {/* right div */}
        <div className='home-right'>
          <div className='text-content'>
            <p>My <br /> Portfolio</p>
            <p className='description'>

              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Long versions of Lorem Ipsum.
            </p>
            <div className='cta-section'>
              <button className='explore-btn'>Explore now</button>
              <h1 className='play-btn'>Play Video</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
