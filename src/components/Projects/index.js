import React, { Component } from 'react'
import { translate } from 'react-i18next'

import Project from './Project'

import './styles/projects.css'

import cv from './res/cv.jpg'
import topshape from './res/top-shape.png'
import webagent from './res/agentweb.jpg'
import wip from './res/wip.jpg'
import avecVousDemain from './res/avec_vous_demain.jpg'
import jsExtra from './res/js-extra.png'
import componentsExtra from './res/components-extra.png'

const files = {
  cv,
  topshape,
  webagent,
  wip,
  avecVousDemain,
  jsExtra,
  componentsExtra,
}

class Projects extends Component {

  renderProjects = () => {
    const { t, trads } = this.props
    return trads.projects.map((item, index) => (
      <Project
        key={t(`projects.${index}.id`)}
        link={t(`projects.${index}.link`)}
        img={files[t(`projects.${index}.id`)]}
        title={t(`projects.${index}.title`)}
        description={t(`projects.${index}.description`)}
        caption={t(`projects.${index}.caption`)}
     />))
  }


  render () {
    return(
      <div id="projects">
        {this.renderProjects()}
      </div>
    )
  }
}

export default translate("home")(Projects)
