import React, { Component } from 'react'
import { Header, Intro, Projects, BackToTopBtn } from '../../components'
import { en } from '../../trans'

import './styles/main.css'

class Main extends Component {

  render () {
    const { i18n } = this.props
    
    return (
      <div className="main">
        <Header i18n={i18n} />
        <div className="landscape"></div>
        <Intro />
        <Projects trads={en} />
        <BackToTopBtn />
      </div>
    )
  }
}

export default Main