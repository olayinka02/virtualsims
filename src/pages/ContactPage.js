import React from 'react';
import { Container, Row, Col, Navbar, Image, Form, Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../component/Assets/images/logo.svg';
import sectionimage from '../component/Assets/images/sectionimage.png';




import '../component/Styles/formpage.css';


function ContactPage() {

    const navbrand ={
        color: '#01C9AF',
        fontSize:'1.5rem',
      
    }

    return (
        <Container fluid>
        <Row >
            <Col xs={12} md={6} lg={6} className="SecondSegment">
                <div>
                    <Link style={{textDecoration: 'none',}} to="/">
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
                </div>

                <div>
                    <h1 className="FormHeader">Let’s Talk!</h1>
                    <p className="FormParagraph">Whether you have questions, feedback, or 
                    need assistance, we're here to help.Fill out this form to send a direct message.
                    </p>

                </div>

                <Form className="form" style={{ paddingTop: 0.5 + 'rem', }}>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formClasslabel">Name <span style={{ color: 'red', }}>*</span></Form.Label>
                        <Form.Control size="lg" className="custom-focus" style={{ fontFamily: 'nunito, sans-serif', backgroundColor: '#EDEDED', fontSize: 0.8 + 'rem' }} type="text" placeholder="Enter Your Fullname" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formClasslabel">Email <span style={{ color: 'red', }}>*</span></Form.Label>
                        <Form.Control size="lg" className="custom-focus" style={{ fontFamily: 'nunito, sans-serif', backgroundColor: '#EDEDED', fontSize: 0.8 + 'rem' }} type="email" placeholder="Enter Your Mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="formClasslabel">Messages <span style={{ color: 'red', }}>*</span></Form.Label>
                        <Form.Control as="textarea" rows={3}  size="lg" className="custom-focus" style={{ fontFamily: 'nunito, sans-serif', backgroundColor: '#EDEDED', fontSize: 0.8 + 'rem' }} type="email" placeholder="Enter Your Mail" />
                    </Form.Group>

                    <Button style={{ fontFamily: 'nunito, sans-serif', fontSize: 0.85 + 'rem', marginTop: 1 + 'rem',backgroundColor:'#008C8C', width:100+'%' }} variant="primary" type="submit">
                        Send Messages
                    </Button>
                </Form>
            </Col>
            <Col xs={12} md={6} lg={6} className="FirstSegment" >
            <Image src={sectionimage} style={{ width: 100 + '%', height:100+'vh', marginRight:0+'rem'}} fluid className="img-fluid" alt="banner-image" />
            </Col>
        </Row>
    </Container>
    );
}

export default ContactPage;
