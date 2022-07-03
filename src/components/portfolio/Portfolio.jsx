import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import PROJECT1 from '../../assets/barbershop.webm'
import PROJECT2 from '../../assets/topflight.webm'
import PROJECT3 from '../../assets/businesscard.webm'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <video width="100%" controls autoPlay muted loop>
            <source src={PROJECT1} type="video/webm"/>
            </video>
          </div>
            <h3>Fade O'Clock Barbershop client website created with HTML/CSS/JS. </h3>
            <div className="portfolio-item-cta">
              {/* <a href="https//github.com" className='btn'>Github</a> */}
              <a href="https://fadeoclock.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <video width="100%" controls autoPlay muted loop>
            <source src={PROJECT2} type="video/webm"/>
            </video>
          </div>
            <h3>Top Flight Client website created with HTML/CSS/JS and bootstrap. </h3>
            <div className="portfolio-item-cta">
              {/* <a href="https//github.com" className='btn'>Github</a> */}
              <a href="https://topflight.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <video width="100%" controls autoPlay muted loop>
            <source src={PROJECT3} type="video/webm"/>
            </video>
          </div>
            <h3>Online Business Card created with HTML/CSS using React. </h3>
            <div className="portfolio-item-cta">
              {/* <a href="https//github.com" className='btn'>Github</a> */}
              <a href="https://kmbusinesscard.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>

        {/* <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="portfolio-gif" />
          </div>
            <h3>This is a portfolio Item Title</h3>
            <div className="portfolio-item-cta">
              <a href="https//github.com" className='btn'>Github</a>
              <a href="http://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="portfolio-gif" />
          </div>
            <h3>This is a portfolio Item Title</h3>
            <div className="portfolio-item-cta">
              <a href="https//github.com" className='btn'>Github</a>
              <a href="http://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="portfolio-gif" />
          </div>
            <h3>This is a portfolio Item Title</h3>
            <div className="portfolio-item-cta">
              <a href="https//github.com" className='btn'>Github</a>
              <a href="http://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio