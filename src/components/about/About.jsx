import React from 'react'
import './about.css'
import ME from '../../assets/letterA.jpeg' // make sure to change
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Passion</h5>
              <small>Attended 4 Hackathons over 5 months</small>


            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About