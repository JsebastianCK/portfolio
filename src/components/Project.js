import React, { Component } from 'react'
import { Container , Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component {

    render() {
        return (
            <Container className={"project"} style={styles.contenedor}>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                >
                <h2>{this.props.project.nombre}</h2>
                </ScrollAnimation>
                <p>{this.props.project.descripcion}</p>
                <img src={this.props.project.imagen} style={{width: 500, height: 375}} />
            </Container>
        )
    }
}
const styles = {
    contenedor: {
        backgroundColor: '#ffeed',
        width: '75%',
        marginTop: '10%',
        borderRadius: 10,
    }
}


export default Project;