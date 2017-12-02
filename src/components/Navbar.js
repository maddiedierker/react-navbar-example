import React, { Component } from 'react'
import NavbarIcon from './NavbarIcon'

export default class Navbar extends Component {
  state = {
    isOpen: true
  }

  renderNavbar = () => {
    if (!this.state.isOpen) {
      return null
    }

    return <div className="navbar">
      <div className="navbar-link">Home</div>
      <div className="navbar-link">About</div>
      <div className="navbar-link">Contact</div>
    </div>
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return <div className="navbar-container">
      {this.renderNavbar()}
      <div className="navbar-icon">
        <NavbarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleNavbar}
        />
      </div>
    </div>
  }
}
