import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about-content">
          <q> If You Do What You Love Then You Will Never Work a Day In Your Life. </q>
          <p>
            I am a software engineer dedicated to building and enhancing software to make people's days better, simpler, and more enjoyable. 
          </p>

          <p>
            Due to my previous work in the health field, I am acutely aware of the importance of accessibility, reliability, and innovation in tech. Now, through my work as a software engineer, I devote my time to building applications that bring about a change in the world a little bit at a time.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About