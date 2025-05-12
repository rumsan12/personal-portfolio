import React from 'react';
import './style.css';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (<>

   <div className="contact-card">
    <h1 className='contact-title'> contact</h1>
    <div className='title-underline'></div>

    <a href="mailto:asalpoudel9@gmail.com" className='email-link'>Asalpoudel9@gmail.com</a>
    <p className='subtext'>Feel free to contact me with any inquires or questions!</p>

    <form className='contact-form'>
      <div className="input-row">
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder='Your Name' />

        </div>
          <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder='your@email.com' />
          </div>
          </div>
          <div className="input-group">
          <label>Message</label>
          <textarea rows={2} placeholder="Type your message here..."/>
          </div>

          <button type='submit' className='submit-btn'>Submit</button>
    </form>

    <div className="social-icons">
  <a href="https://www.facebook.com/asal.poudel.1/"><FaFacebook/></a>
  <a href="https://www.instagram.com/asal_poudel/"><FaInstagram/></a>
  <a href="https://www.github.com/asal99"><FaGithub/></a>
  <a href="https://www.linkedin.com/in/asalpoudel/"><FaLinkedin/></a>
</div>
 </div>
   
    </>
  )
}

export default Contact;