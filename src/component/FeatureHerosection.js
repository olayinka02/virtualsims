import React from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import featurebannerimage from '../component/Assets/images/featurebannerimage.png';
import '../index.css';



function FeatureHerosection() {


    return (
        <Container fluid id="hero" className="heroSection">
            <Row className="heroSectionRow">
                <Col xs={12} md={6} lg={6} className=" d-flex align-items-center  heroSectionLeftText" >
                    <motion.div initial={{ y: 20, opacity: 0, }} animate={{ y: -5, opacity: 1, }} transition={{ duration: 0.5 }}>
                        <div className="contentsection" style={{ paddingTop: 2 + 'rem', paddingBottom: 2 + 'rem' }}>
                            <h1 className="herosectionheadertext">Everything You Need to Build & Run a Virtual School</h1>
                            <p className="herosectionheaderparagraphx1">Building a virtual school from the ground up is complex.
                                With no technical skill and little time, the SAFSIMS Virtual School Platform presents everything
                                you need to start and run your virtual school in no time.
                            </p>
                            <Link to="/waitlist">
                                <Button variant="primary" className="button" size="md" >
                                    {" "}
                                    <span style={{ fontSize: 0.8 + 'rem' }}>Join Our Waitlist</span>
                                    {" "}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </Col>
                <Col xs={12} md={6} lg={6} style={{ padding: 0, }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, }} transition={{ duration: 0.5 }}>
                        <Image src={featurebannerimage} style={{ width: 100 + '%', }} fluid className="img-fluid bannerimage" alt="banner-image" />
                    </motion.div>
                </Col>
            </Row>

        </Container>
    );
}

export default FeatureHerosection;
