import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/r25xu/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/reebxu459" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials