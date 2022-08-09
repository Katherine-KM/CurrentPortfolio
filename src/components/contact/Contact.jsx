import React from 'react'
import './contact.css'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options-container">
          <div className="contact-text-content">
            <h3>Thank you for checking out my work!</h3>
            <p> If you like what you see, I am open to software engineer positions, collabs, projects, and coffee chats! I look forward to speaking with you. </p>
            <div className="contact-icon-container">
              <a href="https://www.linkedin.com/in/katherinemarcott/"><BsLinkedin className='contact-icon'/><h5> Connect on LinkedIn </h5></a>
              <a href="https://twitter.com/CodingKatCodes"> <BsTwitter className='contact-icon'/><h5> Follow me on Twitter </h5></a>
              <a href="https://github.com/KatherineMarcott"> <FaGithub className='contact-icon'/> <h5> Check Out My GitHub </h5></a>
            </div>
          </div>
        </div>
        
        <form id="contact-form-netlify" name="Contact" data-netlify='true' action="/contact-form-netlify" method="post">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

