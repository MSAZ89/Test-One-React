import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact Prestige Roofing Enterprises</title>
        <meta
          name="description"
          content="Contact Prestige Roofing Enterprises"
        />
        <meta
          property="og:title"
          content="Contact Prestige Roofing Enterprises"
        />
        <meta
          property="og:description"
          content="Contact Prestige Roofing Enterprises"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="contact-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1602193230408-1260b7393bf6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxyb29mfGVufDB8fHx8MTY2MDg1NzA3MQ&amp;ixlib=rb-1.2.1&amp;w=900"
          className="contact-image"
        />
        <div className="contact-container1">
          <div className="contact-container2">
            <h1 className="contact-text">
              <span>Contact Us</span>
              <br></br>
            </h1>
            <h2 className="contact-text3">
              <span>Get in touch with Prestige Roofing Enterprises.</span>
              <br></br>
            </h2>
          </div>
          <div className="contact-container3">
            <form
              action="https://app.headlessforms.cloud/api/v1/form-submission/snwKT1Jnxq"
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className="contact-form"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="contact-textinput input"
              />
              <input
                type="tel"
                name="phone"
                required
                maxlength="20"
                minlength="10"
                placeholder="Phone"
                className="contact-textinput1 input"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="contact-textinput2 input"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="contact-textarea textarea"
              ></textarea>
              <input
                type="hidden"
                name="_next"
                value="https://prestige-roofing-enterprises.vercel.app/thanks"
                placeholder="placeholder"
                className="contact-textinput3 input"
              />
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked="true"
                required
                className="contact-checkbox"
              />
              <label htmlFor="consent" className="contact-text6">
                I give permission to be contacted via email by Prestige Roofing
                Enterprises.
              </label>
              <button type="submit" className="contact-button button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Contact
