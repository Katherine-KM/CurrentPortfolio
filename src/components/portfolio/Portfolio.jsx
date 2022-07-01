import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio-container">
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
        </article>
      </div>
    </section>
  )
}

export default Portfolio