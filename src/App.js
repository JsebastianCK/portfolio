import React, { Component } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id={'home'}>
          <Home />
        </section>
        <section id={'about'}>
          <About />
        </section>
        <section id={'projects'}>
          <Projects />
        </section>
      </div>
    );
  }
}

export default App;
