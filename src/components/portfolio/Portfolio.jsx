import React from 'react'
import './portfolio.css'
import SIGNL from '../../assets/signl.png'
import CRUMB from '../../assets/hereicrumb.png'
import SENTI from '../../assets/sentiview.png'


const data = [
  {
    id: 1,
    image: SIGNL,
    title: 'SiGnL: ML Sign Language Communicator for Video Calls',
    github: 'https://github.com/reebxu459/htn-proj22',
    demo: 'https://devpost.com/software/signl'
  },

  {
    id: 2,
    image: CRUMB,
    title: 'Here I Crumb: French Helper Chrome Extension',
    github: 'https://github.com/yimango/ht6-2022-project',
    demo: 'https://devpost.com/software/bready-or-not-here-i-crumb'
  },

  {
    id: 3,
    image: SENTI,
    title: 'SentiView: ML Customer Review Sentiment Analysis Tool',
    github: 'https://github.com/Peterson120/SentiView',
    demo: 'https://devpost.com/software/wink-wonk'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Devpost</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio