import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './thanks.css'

const Thanks = (props) => {
  return (
    <div className="thanks-container">
      <Helmet>
        <title>Prestige Roofing Enterprises</title>
        <meta
          name="description"
          content="Prestige Roofing Enterprises - Fountain Hills, Arizona."
        />
        <meta property="og:title" content="Prestige Roofing Enterprises" />
        <meta
          property="og:description"
          content="Prestige Roofing Enterprises - Fountain Hills, Arizona."
        />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="thanks-hero">
        <div className="thanks-container1">
          <h1 className="thanks-text">
            <span className="thanks-text1">Thank you for your submission</span>
            <br></br>
          </h1>
          <h2 className="thanks-text3">
            A representative will contact you shortly.
          </h2>
          <div className="thanks-btn-group">
            <Link to="/" className="thanks-navlink button">
              Home
            </Link>
            <Link to="/services" className="thanks-navlink1 button">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Thanks
