import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/services" className="navigation-links1-navlink">
        {props.text1}
      </Link>
      <Link to="/contact" className="navigation-links1-navlink1">
        {props.text2}
      </Link>
      <Link to="/blog" className="navigation-links1-navlink2">
        {props.text4}
      </Link>
      <Link to="/about" className="navigation-links1-navlink3">
        {props.text}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Services',
  text2: 'Contact',
  text: 'About',
  rootClassName: '',
  text4: 'Blog',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks1
