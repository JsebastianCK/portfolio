import React, { Component } from 'react';
import Skill from './Skill.js';
import { Row, Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            habilidades: [
                {
                    id: 0,
                    titulo: 'Front-end Development',
                    descripcion: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
                    herramientas: ['HTML' , 'CSS' , 'JAVASCRIPT' , 'REACTJS'],
                    icono: 'fas fa-code'
                },
                {
                    id: 1,
                    titulo: 'Back-end Development',
                    descripcion: 'Ability to manage abstract concepts and complex logic. Knowledge of frameworks, design patterns, databases and APIs',
                    herramientas: ['NODEJS' , 'EXPRESSJS' , 'PHP'],
                    icono: 'fas fa-code-branch'
                },
                {
                    id: 2,
                    titulo: 'Mobile Development',
                    descripcion: 'https://i.imgur.com/8vvQvtH.png',
                    herramientas: ['JAVA' , 'REACT-NATIVE'],
                    icono: 'fas fa-mobile-alt'
                },
            ]
        }
    }

    renderSkills(){
        return this.state.habilidades.map((habilidad) => {
            return (
                <Skill key={habilidad.id} habilidad={habilidad} />
            )
        });
    }


  render() {
    return (
        <div className={'about'} style={{textAlign: ''}}>
            <ScrollAnimation
                animateIn="flipInX"
                animateOnce={true}
            >
                <h1>About</h1>
            </ScrollAnimation>
            <Container>
                <Row>
                    {this.renderSkills()}
                </Row>
            </Container>
        </div>
    )
  }
}

export default Skills;