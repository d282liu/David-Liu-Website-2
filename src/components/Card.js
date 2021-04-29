import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DOJO from './DOJO.png';
import CULTURE from './CultureApp.PNG';
import CHANGE from './change.jpg';
import VERIDIAN from './Veridian.JPG';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  gridItem: {
    display: 'flex',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container direction = "row"  spacing = {3} className =  {classes.gridContainer}>
      <Grid item className={classes.gridItem} md = {4} sm = {6} xs = {12} >
      <Card className={classes.root}>
      <CardActionArea href="https://devpost.com/software/dojo-web-app" target="_blank"> 
        <CardMedia
          className={classes.media}
          image = { DOJO }
          title="DOJO - Hack the North 2021"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DOJO 
            <p><small>Hack the North 2021</small></p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>Worked in a team to develop a video calling web application
          where users can share skills with one another.</p>
          <p>Built with React, HTML and CSS, leveraging the Vonage API</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item className={classes.gridItem} md = {4} sm = {6} xs = {12} >
        <Card className={classes.root}>
        <CardActionArea href="https://devpost.com/software/culture-app" target="_blank">
          <CardMedia
            className={classes.media}
            image={ CULTURE }
            title="Culture App"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Culture App 
              <p><small>Hack Attack 2020</small></p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Collaborated to design an experience for users to explore the various cultures
              of the world and make meaningful global connections.</p>
              <p>Prototyped within Figma</p> 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item className={classes.gridItem} md = {4} sm = {6} xs = {12} >
      <Card className={classes.root}>
      <CardActionArea href="https://bit.ly/3nn7OMs" target="_blank">
          <CardMedia
            className={classes.media}
            image={ CHANGE }
            title="Change.org App Concept"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Change.org App Concept 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Designed a mobile app for the Change.org website to make
              petitons more widely accessible and to highlight pressing
              world issues that require action</p>
              <p>Prototyped within Figma. This was my first experience using Figma</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item className={classes.gridItem} md = {4} sm = {6} xs = {12} >
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ VERIDIAN }
          title="Veridian Scientific"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <p>Veridian Scientific</p>
            <small>SHAD MUN 2019</small>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>Collaborated to craft an extensive business plan for Veridian
          Scientific - a company dedicated to reducing medical waste
          through biodegradeable pipette tips</p>
          <p>Presented to a panel of entrepreneurs and professors</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
  </Grid>
  );
}