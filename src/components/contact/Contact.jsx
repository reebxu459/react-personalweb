import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>r25xu@uwaterloo.ca</h5>
            <a href="mailto:r25xu@uwaterloo.ca">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Email</h4>
            <h5>r25xu@uwaterloo.ca</h5>
            <a href="mailto:r25xu@uwaterloo.ca">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact