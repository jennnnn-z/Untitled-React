import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Wireframe1 from './views/wireframe1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Wireframe1} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
