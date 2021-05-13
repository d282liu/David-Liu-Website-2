import React from 'react'
import '../App.css'
import './AboutMeComponent.css'
import davidLiu from './aboutMeImg.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    secondaryHeading: {
      color: theme.palette.text.secondary,
    },
  }));

function AboutMeComponent() {
    const classes = useStyles();
    return (
        <div className = 'aboutMe-container' id = "aboutMe">
            <h1>About Me</h1>
            <div className = 'content-wrapper'>
                <img src = { davidLiu } alt = "David Liu Image" />
                <p className={classes.secondaryHeading}>
                    Hello! My name is David Liu and I am a student studying Systems Design Engineering (SYDE) at the University of Waterloo (very ex-syde-ing!)
                    I am an aspiring Software Engineer and Designer, and love everything tech. I am always looking for creative and innovative solutions to the problems all 
                    around us in this day and age, and welcome any opportunities allow me to do just that. While I am not out thinking about how to improve the 
                    world (which I admit is not all the time), I enjoy photography, swimming, badminton, video games and playing/listening to music! If you would
                    like to get to know me a bit more, feel free to contact me at any of my socials (linked at the bottom) and we can perhaps set up a meeting over
                    a warm bowl of Pho and a iced QQ Peach Green Tea. 
                </p>
            </div>
        </div>
    )
}

export default AboutMeComponent
