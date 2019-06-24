import React, { Component } from 'react'
import { translate } from 'react-i18next'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

import './styles/header.css'

import frFlag from './res/france.png'
import enFlag from './res/usa.png'
import titleIcon from './res/laptop2.gif'

class Header extends Component {

  state = {
    isOpen: false,
  }

  toggle = () => this.setState({isOpen: !this.state.isOpen})

  lngToEn = () => this.props.i18n.changeLanguage('en')

  lngToFr = () => this.props.i18n.changeLanguage('fr')

  render () {
    const { isOpen } = this.state
    const { t } = this.props

    return(
      <div id="top">
        <Navbar className="header" color="dark" dark expand="md">
          <NavbarBrand className="mx-auto" href="/">
            <img className="title-icon" src={titleIcon} alt="title icon" />
            {t("header.title")}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="options" isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={this.lngToEn}>
                  <img className="option-icon" src={enFlag} alt="english" />
                  {t("header.options.en")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.lngToFr}>
                  <img className="option-icon" src={frFlag} alt="french" />
                  {t("header.options.fr")}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

}

export default translate("home")(Header)