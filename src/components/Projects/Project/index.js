import React, { Component } from 'react'

import './styles/project.css'

class Project extends Component {

  render () {
    const { link, title, description, img, caption } = this.props

    return (
      <a href={link} className="project">
        <div className="background" style={{backgroundImage: `url(${img})`}}>
          <div className="content">
            <h2 className="title">
              {title}
            </h2>
            <hr/>
            <p className="description">
              {description}
            </p>
            {caption && <span className="caption">{caption}</span>}
          </div>
        </div>
      </a>
    )
  }
}

export default Project