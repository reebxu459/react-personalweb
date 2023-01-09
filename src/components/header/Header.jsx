import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocial from './HeaderSocials'
import Typed from "typed.js"
import { useEffect, useRef } from "react";
import TypeWriterEffect from 'react-typewriter-effect';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Rebecca.</h1>
        <div className="typewriter">
          <TypeWriterEffect
          textStyle={{
            fontSize: '1.5em',
            
          }}
          startDelay={2000}
          cursorColor="#FFFFFF"
          multiText={[
            'I am a Computer Science student at UWaterloo.',
            'I am searching for a summer co-op.',
            'I work in both UI/UX.',
            'I am a national badminton player.',
            'I have a sunny personality',
            'Technology empowers people do be creative.',
            'I am here to put a dent in the universe.'
          ]}
          multiTextDelay={3000}
          typeSpeed={50}
          />
        </div>
        <CTA />
        <HeaderSocial />
        <div className="me">
            <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
            </header>
            )
}

export default Header