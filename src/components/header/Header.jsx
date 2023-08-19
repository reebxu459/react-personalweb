import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatar.png'
import SOUP from '../../assets/soup.gif'
import HeaderSocial from './HeaderSocials'
import Typed from "typed.js"
import { useEffect, useRef } from "react";
import TypeWriterEffect from 'react-typewriter-effect';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="top">
          <img src={ME} alt="me" />
          <div className="textpart">
            <h1>Hello, I'm Rebecca.</h1>
            <h4>I'm a CS Student at the University of Waterloo and software developer.</h4>
          </div>
        </div>
        {/* <img src={SOUP} alt="soup" /> */}
        <br />
        <br />
        <h4>The most popular ingredients for my creations may include:</h4>
        <h4><b><span className='light_purple'>Python</span> + <span className='light_blue'>React.js</span>
        &nbsp;+ <span className='grey'>SQL</span> + <span className='pink'>AWS</span> + <span className='light_green'>C/C++</span></b></h4>
        <br />
        <h4>... But I've indulged in these as well:</h4>
        <h4><b><span className='red'>Pandas</span> + <span className='brown'>Tailwind</span>
        &nbsp;+ <span className='orange'>Flask</span> </b></h4>
        <br />
        <div className="typewriter">
          <TypeWriterEffect
          textStyle={{
            fontSize: '1.5rem',
            
          }}
          startDelay={2000}
          cursorColor="#FFFFFF"
          multiText={[
            'I am a national badminton player.',
            'I have a sunny personality',
            'Technology empowers people to be creative.',
            'I am here to put a dent in the universe.'
          ]}
          multiTextDelay={3000}
          typeSpeed={50}
          />
        </div>
        <CTA />
        {/* <HeaderSocial /> */}
        <div className="me">
            </div>
            </div>
            </header>
            )
}

export default Header