import React from 'react'
import './ExperienceComponent.css'
import ControlledAccordions from './accordion'


function Experience() {
    return (
        <div className = 'experience-container' id = "experience">
            <div className = 'content-wrapper'>
            <h1>Experience</h1>
                <ControlledAccordions />
            </div>
        </div>
    )
}

export default Experience
