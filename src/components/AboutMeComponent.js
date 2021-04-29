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
                <p className={classes.secondaryHeading}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
            </div>
        </div>
    )
}

export default AboutMeComponent
