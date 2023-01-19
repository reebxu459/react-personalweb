import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './app-style.css'

const app = () => {
  return (
    <>
      <Header />
    <div className="web__container">
      <article>
        <Nav />
      </article>
      <article>
        <About />
      </article>
      <article>
        <Experience />
      </article>
      <article>
        <Portfolio />
      </article>
      <article >
        <Contact />
      </article>
      <article>
        <Footer />
      </article>
      </div>
 
        
    </>
  )
}

export default app