import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id='footer'>
      <h2>Contact</h2>

      <div className="contact">
        <div className="site">
          <h4>&nbsp;&nbsp;Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        </div>
        <div className="link">
          <h4>r25xu@uwaterloo.ca &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        </div>
      </div>

      <h2>Links</h2>

      <div className="contact">
        <div className="site">
          <h4>&nbsp;&nbsp;GitHub &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        </div>
        <div className="link">
          <h4><a href="https://github.com/reebxu459">https://github.com/reebxu459 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h4>
        </div>
      </div>

      <div className="contact">
        <div className="site">
          <h4>&nbsp;&nbsp;LinkedIn &nbsp;&nbsp;&nbsp;</h4>
        </div>
        <div className="link">
          <h4><a href="https://www.linkedin.com/in/r25xu/">https://www.linkedin.com/in/r25xu/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h4>
        </div>
      </div>

    </section>
  )
}

export default Footer