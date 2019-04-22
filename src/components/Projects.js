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
                    descripcion: 'The app is able to search for movies via the TMDb API and render the results to the user',
                    imagen: 'https://i.imgur.com/2NbgwJ0.png'
                },
                {
                    id: 1,
                    nombre: 'Movie Searcher',
                    descripcion: 'The app is able to search for movies via the TMDb API and render the results to the user',
                    imagen: 'https://i.imgur.com/2NbgwJ0.png'
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