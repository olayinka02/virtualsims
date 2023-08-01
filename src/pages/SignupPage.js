import React from 'react';
import { Container, Row, Col, Navbar, Image, Form, Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../component/Assets/images/logo.svg';

import SliderItems from '../component/SliderItems.js';


import '../component/Styles/formpage.css';


function SignupPage() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6} lg={6} className="FirstSegment">
                    <div>
                        <Link to="/">
                            <Navbar.Brand>
                                <Image src={logo} fluid />
                            </Navbar.Brand>
                        </Link>
                    </div>

                   <SliderItems />
                </Col>
                <Col xs={12} md={6} lg={6} className="SecondSegment">
                    <div className="displayOnMobile">
                        <Link to="/">
                            <Navbar.Brand>
                                <Image src={logo} fluid />
                            </Navbar.Brand>
                        </Link>
                    </div>

                    <div>
                        <h1 className="FormHeader">Signup For Free Trial</h1>
                        <p className="FormParagraph">WEnter your email address below to sign up for a free trial of ClassBook.
                        </p>

                    </div>

                    <Form className="form" style={{ paddingTop: 0.5 + 'rem', }}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="formClasslabel">Email address <span style={{ color: 'red', }}>*</span></Form.Label>
                            <Form.Control size="lg" className="custom-focus" style={{ fontFamily: 'jost, sans-serif', backgroundColor: '#EDEDED', fontSize: 0.8 + 'rem' }} type="email" placeholder="Enter Your Mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="formClasslabel">Phone Number </Form.Label>
                            <Form.Control size="lg" className="custom-focus" style={{ fontFamily: 'jost, sans-serif', backgroundColor: '#EDEDED', fontSize: 0.8 + 'rem' }} type="tel" placeholder="Enter Your Phone number" />
                        </Form.Group>

                    
                        <Button style={{ fontFamily: 'jost, sans-serif',  fontSize: 0.85 + 'rem',marginTop:1+'rem', }} variant="primary" type="submit">
                          Sign Up For Free Trial
                        </Button>
                    </Form>
                </Col>

            </Row>
        </Container>
    );
}

export default SignupPage;
