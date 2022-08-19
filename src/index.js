import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Thanks from './views/thanks'
import Home from './views/home'
import Contact from './views/contact'
import Blog from './views/blog'
import About from './views/about'
import Services from './views/services'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Thanks} path="/thanks" />
        <Route exact component={Home} path="/" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={About} path="/about" />
        <Route exact component={Services} path="/services" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
