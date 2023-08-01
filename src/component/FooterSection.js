import React from 'react';
import { Container, Image, Nav, Button, Row, Col, Form, Navbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import logo from '../component/Assets/images/logo.svg';
import facebook from '../component/Assets/images/facebook.svg';
import google from '../component/Assets/images/google.svg';
import linkedin from '../component/Assets/images/linkedin.svg';
import twitter from '../component/Assets/images/twitter.svg';
import '../index.css';

function FooterSection() {
    const buttonNav = {
        backgroundColor: '#EAFCFE',

    }
    const navbrand = {
        color: '#01C9AF',
        fontSize: '1.5rem',
       


    }


    return (

        <Container fluid className="Bottomnav" style={buttonNav}>
            <Row>
                <Col sm={12} md={12} lg={4} xl={4}>
                    <div>
                        <Nav.Link >
                            <LinkRoll to="hero" spy={true} smooth={true} offset={-70} duration={100} >

                                <Navbar.Brand>
                                    <Image src={logo} fluid />
                                    {' '}
                                    <span style={navbrand} className="navbranded">
                                        <b >
                                            VirtualSIMS
                                        </b>
                                    </span>
                                </Navbar.Brand>

                            </LinkRoll>
                        </Nav.Link>
                        <p className="bottomparagraph" >
                            simplifies learning and guarantees mastery in an engaging and
                            reliable way. With ClassBook, students can learn at their own
                            pace, get personalized feedback, and collaborate with classmates
                            in a safe and supportive environment.
                        </p>
                        <div style={{ display: 'flex', }}>
                            <Image style={{ marginRight: 0.3 + 'rem' }} src={facebook} fluid />
                            <Image style={{ marginRight: 0.3 + 'rem' }} src={google} fluid />
                            <Image style={{ marginRight: 0.3 + 'rem' }} src={linkedin} fluid />
                            <Image style={{ marginRight: 0.3 + 'rem' }} src={twitter} fluid />
                        </div>
                    </div><br />
                </Col>
                <Col sm={12} md={12} lg={8} xl={8}>
                    <Row>
                        <Col sm={0} md={0} lg={4} xl={4}>
                        </Col>

                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="navlinkingclass" >
                                <div style={{ color: '#5C5571', fontSize: 0.8 + 'rem', listStyle: 'none' }} >
                                    <h4 style={{ color: '#008C8C', fontSize: 0.9 + 'rem', fontWeight: '600' }}>COMPANY</h4>
                                    <li>Our Blog</li>
                                    <li>News and Media</li>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Code of Conduct</li>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={4} lg={4} xl={4}>
                            <div className="navlinkingclass" >
                                <div style={{ color: '#5C5571', fontSize: 0.8 + 'rem', listStyle: 'none' }} >
                                    <h4 style={{ color: '#008C8C', fontSize: 0.9 + 'rem', fontWeight: '600' }}>HELP</h4>
                                    <li>Get Help</li>
                                    <li>FAQs</li>
                                    <li>Security</li>
                                    <li>Contact Us</li>
                                    <li>Pricing</li>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Col>



            </Row>

            <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <div>
                        <p className="bottomparagraph" >
                            simplifies learning and guarantees mastery in an engaging and
                            reliable way. With ClassBook, students can learn at their own
                            pace, get personalized feedback, and collaborate with classmates
                            in a safe and supportive environment.
                        </p>
                        <span className="bottomparagraph" >
                            © 2023 VirtualSIMS. All rights reserved.| Sitemap
                        </span>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <div className="newsletterformbody">
                        <h6 className="newsletterhead">Join Our Newsletter</h6>
                        <div style={{ display: 'flex', }}>
                            <Form.Control style={{ height: 2.7 + 'rem', fontFamily: 'jost, sans-serif', fontSize: 0.85 + 'rem' }} type="email" placeholder="Enter your mail here" />
                            <Button style={{ height: 2.7 + 'rem', marginTop: 0 + 'rem', fontFamily: 'Nunito Sans sans-serif', backgroundColor: '#008C8C' }} variant="primary" className="button-store" type="submit" >
                                Subscribe
                            </Button>
                        </div>
                        <p className="newsletterparagraph" style={{ marginTop: 0.7 + 'rem' }}>* Will send you weekly updates for your better engagement.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterSection;
