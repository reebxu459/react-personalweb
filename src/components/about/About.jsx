import React from 'react'
import './about.css'
import ME from '../../assets/me.JPG' // make sure to change
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div class="timeline">
        <div class="container right">
          <div class="content">
            <h2>2017</h2>
            <p>hi</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>hi</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2015</h2>
            <p>hi</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2012</h2>
            <p>hi</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2011</h2>
            <p>hi</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2007</h2>
            <p>hi</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 

// need to change the articles' contents and their icons