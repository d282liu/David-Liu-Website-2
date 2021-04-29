import React from 'react';
import '../../App.css';
import HomeComponent from '../HomeComponent';
import AboutMeComponent from '../AboutMeComponent';
import ExperienceComponent from '../ExperienceComponent';
import ProjectsComponent from '../ProjectsComponent';
import Footer from '../Footer';
function Home() {
    return (
        <>
            <HomeComponent />
            <AboutMeComponent />
            <ExperienceComponent />
            <ProjectsComponent />
            <Footer />
        </>
    )
}

export default Home
