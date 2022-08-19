import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Prestige Roofing Services Blog</title>
        <meta name="description" content="Prestige Roofing Services Blog" />
        <meta property="og:title" content="Prestige Roofing Services Blog" />
        <meta
          property="og:description"
          content="Prestige Roofing Services Blog"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="blog-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1602193289141-9605ad75d0a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxyb29mfGVufDB8fHx8MTY2MDg1NzA3MQ&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="blog-image"
        />
        <div className="blog-container1">
          <h1 className="blog-text">
            <span className="blog-text1">
              Prestige Commercial
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="blog-text2"></br>
            <span className="blog-text3">Roofing Services Blog</span>
            <br></br>
          </h1>
          <h2 className="blog-text5">Welcome to our blog.</h2>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Blog
