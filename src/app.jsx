import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const app = () => {
  return (
    <>
        <Header />
        <div>
          <Parallax pages={4}>
            <ParallaxLayer>
              <h2>hehe</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <h2>Yeehaw</h2>
            </ParallaxLayer>

          </Parallax>
        </div>
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default app