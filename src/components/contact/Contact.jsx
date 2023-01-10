import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>r25xu@uwaterloo.ca</h5>
            <a href="mailto:r25xu@uwaterloo.ca">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillMessage className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>(+1)647-303-3508</h5>
          </article>
        </div>
        <form action="">
          <input type = "text" name='name' placeholder= 'Your Full Name' required />
          <input type = "email" name='email' placeholder= 'Your Email' required />
          <textarea name="message" rows="7" placeholder= 'Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact