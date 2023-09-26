import React from 'react';
import styles from './navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';

const navLinks = [
    {
        label: 'About',
        to: 'herosection'
    },
    {
        label: 'Skills',
        to: 'myskills'
    },
    {
        label: 'Services',
        to: 'myservices'
    },
    {
        label: 'Projects',
        to: 'myprojects'
    },
    {
        label: 'Contact',
        to: 'mycontact'
    }
]

const NavBar = () => {

    const brandStyle = {
        marginLeft: "2em",
        color: "#EAB308",
        letterSpacing: "0.15em"
    };

    return (
        <Navbar className={styles['navbar-bg']} variant="dark" expand="md" id={styles.navbar}>
            <Navbar.Brand style={brandStyle} as={Link} to="navbar" spy={true} smooth={true} offset={-70} duration={500}>
                MyFolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleButton}/>
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
                <Nav className="ml-auto" id={styles.navlinks}>
                    {
                        navLinks.map((link, index) => (
                            <Nav.Link
                                className={styles['navlink']}
                                as={Link}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={500}
                                key={index}
                            >
                                {link.label}
                            </Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;