import React, { Component } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
