import React, { Component } from 'react'
import { Container , Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    renderTools(){
        return this.props.habilidad.herramientas.map((herramienta) => {
            return (
                <span className="badge badge-primary" style={{marginRight: '2px'}}>{herramienta}</span>
            )
        });
    }

    render() {
        return (
            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                >
                    <Container className={"habilidad"} style={styles.contenedor}>
                        <ScrollAnimation
                            animateIn="rubberBand"
                            animateOnce={true}
                        >
                        <i className={this.props.habilidad.icono}></i>
                        </ScrollAnimation>
                        <h6><b>{this.props.habilidad.titulo}</b></h6>
                        <p className="descripcion text-justify">{this.props.habilidad.descripcion}</p>
                        {this.renderTools()}
                    </Container>
                </ScrollAnimation>
            </Col>
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


export default Skills;