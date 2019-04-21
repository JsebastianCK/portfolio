import React, { Component } from 'react'
import TextLoop from "react-text-loop";

class Home extends Component {
  render() {
    return (
      <div className="home">
          <div className="bg-image"></div>
          <div className="texto">
            <h1 className="nombre">Sebastián Coronel</h1>
            <hr style={{width: 50}}/>
            <TextLoop
                className="home-texto"
                springConfig={{ stiffness: 70, damping: 31 }}
                adjustingSpeed={250}
                noWrap={true}
            >
              <span style={{color: 'red'}}>Web</span>
              <span style={{color: 'red'}}>Mobile </span>
            </TextLoop> Developer
          </div>
          <div className="iconos">
            <a className="fab fa-github" href="https://github.com/JsebastianCK" target="_blank"/>
            <a className="fab fa-linkedin" href="https://www.linkedin.com/in/jsebastianck/" target="_blank"/>
          </div>
      </div>
    )
  }
}

export default Home;