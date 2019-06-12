import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Project from './Project.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: [
                {
                    id: 0,
                    nombre: 'Movie Searcher',
                    descripcion: 'The app searches movies via the TMDb API, displaying the movie queried plus a brief description',
                    imagen: 'https://i.imgur.com/2NbgwJ0.png',
                    techs: ['REACT-NATIVE'],
                    code: true,
                    source: 'https://github.com/JsebastianCK/moviesearcher'
                },
                {
                    id: 1,
                    nombre: 'Te Llevo',
                    descripcion: 'Lyft like app. The idea behind Te LLevo is to provide a more technically advanced, cheaper alternative to taxi services, as well as make the ride more personal by enabling you to know who it is you will be trusting to drive you from point A to point B. Intended to be used by college students. (PRIVATE REPO)',
                    imagen: 'https://i.imgur.com/oBXrqto.png',
                    techs: ['JAVA' , 'FIREBASE'],
                    code: false,
                    source: '#'
                },
            ]
        }
    }

    renderProjects(){
        return this.state.projects.map((project) => {
            return (
                <Project key={project.id} project={project} />
            )
        });
    }

    render() {
        return (
        <div className="projects">
            <ScrollAnimation
                animateIn="flipInY"
                animateOnce={true}
            >
                <h1>Projects</h1>
            </ScrollAnimation>
            <Carousel
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                autoPlay interval={5000} infiniteLoop
                className={'slider'}
            >
                {this.renderProjects()}
            </Carousel>
        </div>
        )
    }
}

export default Projects;