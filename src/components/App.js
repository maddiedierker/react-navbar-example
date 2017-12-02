import React, { Component } from 'react'
import Navbar from './Navbar'
import Content from './Content'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Content />
      </div>
    )
  }
}

export default App
