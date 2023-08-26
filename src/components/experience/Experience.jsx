import React from 'react'
import './experience.css'
import CRUMB from '../../assets/hereicrumb.png'
import SENTI from '../../assets/sentiview.png'
import ZEN from '../../assets/zensphere.png'


import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      
      <div className="timeline_section">
        <div className="dates">
          <h4>May-Aug 2023 &nbsp;</h4>
        </div>
        <div className="content">
          <h2>Software Developer - 407 ETR</h2>
          <h3>Completed the end-to-end development of an app that allowed analysts to efficiently and flexibly query customer records for any scenario. The success of this project was all thanks to my regular consults with them.</h3>
          <h4>Python · Pandas · AWS · React</h4>
        </div>
      </div>

      <div className="timeline_section">
        <div className="dates">
          <h4>June-Aug 2022 &nbsp;</h4>
        </div>
        <div className="content">
          <h2>Coding and 3D Printing Instructor - TAC</h2>
          <h3>Led groups of 20 youth aged 7-12 in elevating their coding and CAD prowess and delivered tailored feedback to students and parents resulting in many returning summer campers.</h3>
          <h4>Python · Blender · TinkerCAD</h4>
        </div>
      </div>
      

      <h2>My Projects</h2>
      
      <div className="timeline_section">
        <div className="dates">
          <h4>May 2023&nbsp;</h4>
        </div>
        <div className="content">
          <img src={ZEN} alt="" />
          <h2>ZenSphere - MetHacks</h2>
          <h3>Winner of the Healthcare Hack Category. ZenSphere is a Chrome extension that finds and blurs text and images that display sensitive topics defined by the user so they can surf the web with peace of mind.</h3>
          <h4>Cohere AI · Tensorflow · React</h4>
        </div>
      </div>

      <div className="timeline_section">
        <div className="dates">
          <h4>Jan 2023 &nbsp;</h4>
        </div>
        <div className="content">
          <img src={SENTI} alt="" />
          <h2>Sentiview - DeltaHacks</h2>
          <h3>Sentiview is an application that performs sentiment analysis and tokenization on huge amounts of customer reviews to sort out the positive and negative ones, as well as highlight commonly mentioned keywords to help business owners narrow down their points of strength and weakness.</h3>
          <h4>Flask · Tailwind · React · Cohere AI</h4>
        </div>
      </div>

      <div className="timeline_section">
        <div className="dates">
          <h4>July 2022 &nbsp;</h4>
        </div>
        <div className="content">
          <img src={CRUMB} alt="" />
          <h2>Here I Crumb! - Hack the 6ix</h2>
          <h3>Here I Crumb! is an app that activates a pop-up in the corner of the screen that displays 3 French words a day. It was been published to the Chrome Web store and is currently in use by my high school's French teachers' classes to enrich their classes.</h3>
          <h4>Python · Blender · TinkerCAD</h4>
        </div>
      </div>

      <div className="timeline_section">
        <div className="dates">
          <h4>Mar-Sept 2021</h4>
        </div>
        <div className="content">
          <h2>PuMP Website</h2>
          <h3>Worked with other web developers and designers to build a website for local charity Prospective Medical Professionals, also known as PuMP.</h3>
          <h4>JavaScript · Git · HTML · CSS</h4>
        </div>
      </div>
    </section>
  )
}

export default Experience
