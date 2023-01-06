import React from 'react'
import './portfolio.css'
import SIGNL from '../../assets/signl.png'
import CRUMB from '../../assets/hereicrumb.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SIGNL} alt="SiGnL" />
          </div>
          <h3>SiGnL</h3>
          <a href="https://github.com/reebxu459/htn-proj22" className='btn' target='_blank'>Github</a>
          <a href="https://devpost.com/software/signl" className='btn btn-primary' target='_blank'>Devpost</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CRUMB} alt="Here I Crumb!" />
          </div>
          <h3>Here I Crumb!</h3>
          <a href="https://github.com/yimango/ht6-2022-project" className='btn' target='_blank'>Github</a>
          <a href="https://devpost.com/software/bready-or-not-here-i-crumb" className='btn btn-primary' target='_blank'>Devpost</a>

        </article>

      </div>
    </section>
  )
}

export default Portfolio