import React, {useState , useEffect} from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbarContainer: {
      msOverflowX: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80px',
      maxWidth: '1500px',
    },
  }));


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const classes = useStyles();
    return (
        <>
            <nav className = "navbar">
                <div className = {classes.navbarContainer}>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link 
                                activeClass = "active"
                                to = "home"
                                spy = {true}
                                smooth = {true}
                                offset = {-80}
                                duration = {500}
                                className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                         </li>
                         <li className = 'nav-item'>
                            <Link 
                                activeClass = "active"
                                to = "aboutMe"
                                spy = {true}
                                smooth = {true}
                                offset = {-80}
                                duration = {500}
                                className = 'nav-links' onClick = {closeMobileMenu}>
                                About Me
                            </Link>
                         </li>
                         <li className = 'nav-item'>
                            <Link 
                                activeClass = "active"
                                to = "experience"
                                spy = {true}
                                smooth = {true}
                                offset = {-80}
                                duration = {500}
                                className = 'nav-links' onClick = {closeMobileMenu}>
                                Experience
                            </Link>
                         </li>
                         <li className = 'nav-item'>
                            <Link 
                                activeClass = "active"
                                to = "projects"
                                spy = {true}
                                smooth = {true}
                                offset = {-80}
                                duration = {500}
                                className = 'nav-links' onClick = {closeMobileMenu}>
                                Projects
                            </Link>
                         </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
