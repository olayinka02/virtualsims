import React, { useEffect } from 'react';
import { Container, Navbar, Image, Nav, Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { NavLink, useLocation } from 'react-router-dom';

import { Fade as Hamburger } from 'hamburger-react';
import logo from '../component/Assets/images/logo.svg';


import '../index.css';


const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the location changes
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

function StickyNavbar() {

    const Harmburgerstyle = {
        color: '#038EA0',
        outline: 'none',
        border: 0,
    };

    const navbrand = {
        color: '#01C9AF',
        fontSize: '1.5rem',

    }

    return (
        <Navbar sticky="top" id="navbar" expand="lg" className="NavBarBody">
            <Container fluid className="navcontainer">
                <Link style={{ textDecoration: 'none', }} to="/">
                    <Navbar.Brand>
                        <Image src={logo} fluid />
                        {' '}
                        <span style={navbrand} className="navbranded">
                            <b>
                                VirtualSIMS
                            </b>
                        </span>
                    </Navbar.Brand>
                </Link>


                <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" style={Harmburgerstyle}  >
                    <Hamburger duration={0.8} hideOutline={false} />
                </Navbar.Toggle>



                <Navbar.Collapse id="basic-navbar-nav" className="navChildrenWrap">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="navwrap">
                        <ScrollToTop />
                        <NavLink exact to="/" className="nav-link" style={{ textDecoration: 'none' }} >
                            Home
                        </NavLink>

                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/feature">
                            Features
                        </NavLink>

                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/about">
                            How it works
                        </NavLink>

                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/contact">
                            Contact Us
                        </NavLink>


                        <div className="buttonbody">
                            {' '}
                            <Link to="/waitlist">
                                <Button variant="primary" className="button" size="md" >
                                    <span style={{ fontSize: 0.8 + 'rem' }}>Join Our waitlist</span>
                                </Button>
                            </Link>
                        </div>

                    </Nav>
                </Navbar.Collapse>


            </Container>

        </Navbar>
    );
}

export default StickyNavbar;
