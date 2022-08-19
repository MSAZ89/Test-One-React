import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/services" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/about" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/blog" className="navigation-links-navlink2">
        {props.text2}
      </Link>
      <Link to="/contact" className="navigation-links-navlink3">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Blog',
  text1: 'About',
  text3: 'Contact',
  text: 'Services',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
