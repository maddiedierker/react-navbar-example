import React, { Component } from 'react'

export default class Navbar extends Component {
  renderNavbar = () => {
    return <div className="navbar">
      <div className="navbar-link">Home</div>
      <div className="navbar-link">About</div>
      <div className="navbar-link">Contact</div>
    </div>
  }

  render() {
    return <div className="navbar-container">
      {this.renderNavbar()}
    </div>
  }
}
