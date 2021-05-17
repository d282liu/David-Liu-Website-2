import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(23),
      color: theme.palette.text.secondary,
    },
  }));

function Footer() {
    const classes = useStyles();
    return (
        <div className = 'footer-container'>
            <div className = 'content-wrapper'>
                <h1>Connect with me!</h1>
                <div className = 'social-media-wrap'>
                    <a href = "mailto: d282liu@waterloo.ca" className = 'icon'>
                        <i class="fas fa-envelope"></i>
                        <h3 className={classes.secondaryHeading}>Shoot me an Email @david.liu2@uwaterloo.ca</h3> 
                    </a>
                    <a href = "https://github.com/d282liu" className = 'icon'>
                        <i class="fab fa-github"></i>
                        <h3 className={classes.secondaryHeading}>Check out my work @d282liu</h3> 
                    </a>
                    <a href = "https://www.linkedin.com/in/davidliu13/" className = 'icon'>
                        <i class="fab fa-linkedin"></i>
                        <h3 className={classes.secondaryHeading}>Join my network</h3> 
                    </a>
                    <a href = "DAVID LIU RESUME 1B - MAY 2021.pdf" download className = 'icon'>
                    <i class="fas fa-briefcase"></i>
                        <h3 className={classes.secondaryHeading}>Resume</h3> 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
