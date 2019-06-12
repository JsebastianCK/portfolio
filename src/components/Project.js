import React, { Component } from 'react'
import { Container , Col , Row} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component {

    renderTech(){
        let i = 0;
        return this.props.project.techs.map((tech) => {
            i++;
            return (
                <span key={i} className="badge badge-primary tech">{tech}</span>
            )
        });
    }

    render() {
        return (
            <Container className={"project"}>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                >
                </ScrollAnimation>
                <Row>
                    <Col>
                        <h3>{this.props.project.nombre}</h3>
                        <p className={'text-justify'}>{this.props.project.descripcion}</p>
                        {this.renderTech()}
                    </Col>
                    <Col>
                        <img src={this.props.project.imagen} /> 
                    </Col>
                </Row>
                <Row>
                    {this.props.project.code ? <a href={this.props.project.source} target="_blank" className="btn btn-primary">Source Code</a> : <a className="btn btn-secondary" disabled><i class="fas fa-ban"/> Source Code</a>}
                </Row>
            </Container>
        )
    }
}

export default Project;