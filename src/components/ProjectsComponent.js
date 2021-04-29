import React from 'react'
import './ProjectsComponent.css'
import MediaCard from './Card'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridContainer: {
    }
    
});

function ProjectsComponent() {
    const classes = useStyles();
    return (
        <div className = 'projects-container' id = "projects">
            <div className = 'content-wrapper'>
                <h1>Projects</h1>
                <MediaCard />
            </div>
        </div>
    )
}

export default ProjectsComponent
