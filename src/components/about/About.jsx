import React from 'react'
import './about.css'
import ME from '../../assets/me.JPG' // make sure to change
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
              <h5>Passionate</h5>
              <small>Attended 4 Hackathons over 5 months</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Humorous</h5> 
              <small>A spider is the only web developer that likes bugs</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Passion</h5>
              <small>Attended 4 Hackathons over 5 months</small>
            </article>
          </div>

          <p>
            filler text yyyyeeeeaaaaaayyyyyyy
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About 

// need to change the articles' contents and their icons