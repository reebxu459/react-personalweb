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
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Nav />
    </>
  )
}

export default app