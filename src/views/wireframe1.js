import React from 'react'

import { Helmet } from 'react-helmet'

import './wireframe1.css'

const Wireframe1 = (props) => {
  return (
    <div className="wireframe1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="wireframe1-wireframe1">
        <img
          alt="Rectangle113"
          src="/external/rectangle113-gtu-200h.png"
          className="wireframe1-rectangle1"
        />
        <span className="wireframe1-text">
          <span>Jennifer Zhang</span>
        </span>
      </div>
    </div>
  )
}

export default Wireframe1
