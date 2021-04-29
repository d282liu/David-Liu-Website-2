import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutMeComponent from './components/AboutMeComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectsComponent from './components/ProjectsComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/aboutMe' component = {AboutMeComponent} />
          <Route path = '/experience' component = {ExperienceComponent} />
          <Route path = '/projects' component = {ProjectsComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
