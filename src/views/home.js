import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
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
      <Header></Header>
      <div className="home-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1602193289141-9605ad75d0a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxyb29mfGVufDB8fHx8MTY2MDg1NzA3MQ&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="home-image"
        />
        <div className="home-container1">
          <h1 className="home-text">
            <span className="home-text01">Prestige Roofing Enterprises</span>
            <br></br>
          </h1>
          <h2 className="home-text03">Your leader in commercial roofing.</h2>
          <div className="home-btn-group">
            <Link to="/contact" className="home-navlink button">
              Get Started
            </Link>
            <Link to="/services" className="home-navlink1 button">
              Learn More
            </Link>
          </div>
          <span className="home-text04">
            <br></br>
            <br></br>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              Lorem
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Home
