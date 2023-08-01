import React from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import anima from '../component/Assets/images/anima.svg';
import '../index.css';



function HeroSection() {

  const textHeaderColor = {
    color: '#39B0C0',
  }





  return (
    <Container fluid id="hero" className="heroSection">
      <Row className="heroSectionRow">
        <Col xs={12} md={6} lg={6} className=" d-flex align-items-center  heroSectionLeftText" >
          <motion.div initial={{ y: 20, opacity: 0, }} animate={{ y: -5, opacity: 1, }} transition={{ duration: 0.5 }}>
            <div className="contentsection" style={{ paddingTop: 2 + 'rem', paddingBottom: 2 + 'rem' }}>
              <h1 className="herosectionheadertext">Launch Your
                <span style={textHeaderColor}> Virtual School </span>
                With a Few Clicks</h1>
              <p className="herosectionheaderparagraphx1">Are you looking to start a virtual school but find
                the technical details overwhelming? In a rapidly evolving educational landscape, the SAFSIMS
                Virtual School Platform empowers educators to create a seamless and dynamic learning experience
                for their students.
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
            <Image src={anima} style={{ width: 100 + '%', }} fluid className="img-fluid bannerimage" alt="banner-image" />
          </motion.div>
        </Col>
      </Row>

    </Container>
  );
}

export default HeroSection;
