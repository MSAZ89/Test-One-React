import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CommercialRoofing from '../components/commercial-roofing'
import IndustrialRoofing from '../components/industrial-roofing'
import RoofingSupplies from '../components/roofing-supplies'
import RoofingMaterials from '../components/roofing-materials'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About Prestige Roofing Enterprises</title>
        <meta
          name="description"
          content="About Prestige Roofing Enterprises in Phoenix, Arizona."
        />
        <meta
          property="og:title"
          content="About Prestige Roofing Enterprises"
        />
        <meta
          property="og:description"
          content="About Prestige Roofing Enterprises in Phoenix, Arizona."
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="about-features">
        <h1 className="about-text">
          <span>What We Do</span>
          <br></br>
        </h1>
        <div className="about-container1">
          <CommercialRoofing rootClassName="rootClassName"></CommercialRoofing>
          <IndustrialRoofing rootClassName="industrial-roofing-root-class-name"></IndustrialRoofing>
          <RoofingSupplies rootClassName="roofing-supplies-root-class-name"></RoofingSupplies>
          <RoofingMaterials rootClassName="roofing-materials-root-class-name"></RoofingMaterials>
        </div>
        <Link to="/contact" className="about-navlink button">
          Contact Us
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default About
