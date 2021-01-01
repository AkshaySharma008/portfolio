import React from 'react';
import ProjectCard from '../components/projectCard'

function projectPage(){
    return(
        <div className="projectPage">
            <h1 className="Project-heading text-center pt-5">Projects</h1>
            <p className="project-subheading text-center">The application which I have developed using my knowledge</p>
            <div className="container">
                <div className="row py-5">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </div>
           
            </div>
        </div>
    )
}

export default projectPage