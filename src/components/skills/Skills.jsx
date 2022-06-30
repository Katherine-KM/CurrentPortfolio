import React from 'react'
import './skills.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {TbBrandBootstrap} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'
import {SiPostgresql} from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Experience</h2>
      <h5>What Skills do I have? </h5>

      <div className="container skills-container">
        <div className="skills-tools">
          <h2> The Skills, Stack &amp; Technologies I Use</h2>
          <div className="skills-content">
            <article className="skills-details">
              <AiOutlineHtml5 className='skills-details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className="skills-details">
              <DiCss3 className='skills-details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className="skills-details"><TbBrandJavascript className='skills-details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className="skills-details"><FaReact className='skills-details-icon'/>
              <h4>React</h4>
            </article>
            <article className="skills-details"><TbBrandBootstrap className='skills-details-icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className="skills-details"><FaNodeJs className='skills-details-icon'/>
              <h4>Node.js</h4>
            </article>
            <article className="skills-details"><SiExpress className='skills-details-icon'/>
              <h4>Express</h4>
            </article>
            <article className="skills-details"><SiMongodb className='skills-details-icon'/>
              <h4>MongoDB</h4>
            </article>
            <article className="skills-details"><SiPostgresql className='skills-details-icon'/>
              <h4>PostgreSQL</h4>
            </article>
            <article className="skills-details"><FaGitAlt className='skills-details-icon'/>
              <h4>Git</h4>
            </article>
            <article className="skills-details"><FaGithub className='skills-details-icon'/>
              <h4>GitHub</h4>
            </article>
            <article className="skills-details"><FaFigma className='skills-details-icon'/>
              <h4>Figma</h4>
            </article>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Skills