import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import IndustrialRoofing from '../components/industrial-roofing'
import CommercialRoofing from '../components/commercial-roofing'
import RoofingMaterials from '../components/roofing-materials'
import RoofingSupplies from '../components/roofing-supplies'
import Footer from '../components/footer'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Prestige Roofing Enterprises Services</title>
        <meta
          name="description"
          content="Prestige Roofing Enterprises, servicing Arizona businesses since 1980."
        />
        <meta
          property="og:title"
          content="Prestige Roofing Enterprises Services"
        />
        <meta
          property="og:description"
          content="Prestige Roofing Enterprises, servicing Arizona businesses since 1980."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b134c8e4-62c4-4acf-8d3a-8cb3486905c7/1af3cb27-712a-4d09-a2b8-07aa27d6451a?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="services-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1602193289141-9605ad75d0a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxyb29mfGVufDB8fHx8MTY2MDg1NzA3MQ&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="services-image"
        />
        <div className="services-container1">
          <h1 className="services-text">
            <span className="services-text1">
              Prestige Commercial
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="services-text2"></br>
            <span className="services-text3">Roofing Services</span>
            <br></br>
          </h1>
          <IndustrialRoofing rootClassName="industrial-roofing-root-class-name1"></IndustrialRoofing>
          <CommercialRoofing rootClassName="commercial-roofing-root-class-name1"></CommercialRoofing>
          <RoofingMaterials rootClassName="roofing-materials-root-class-name1"></RoofingMaterials>
          <RoofingSupplies rootClassName="roofing-supplies-root-class-name1"></RoofingSupplies>
          <div className="services-btn-group">
            <Link to="/contact" className="services-navlink button">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Services
