import React from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { easeOut, motion } from 'framer-motion';
import learnimage from '../component/Assets/images/learnimage.png';

import '../index.css';

function MoreDetails() {

  const textHeaderColor = {
    color: '#437EF7',
  }
  const subhead = {
    color: '#666565',
    fontSize: 0.8 + 'rem',
  }


  return (
    <Container fluid className="whyus">
      <Row className="whyusrow">
        <Col xs={12} md={6} lg={6}>
          <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
            <Image src={learnimage} fluid className="img-fluid learnimg" alt="learn-image" />
          </motion.div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }} >
            <div className="contentsection" style={{ paddingTop: 5 + 'rem', paddingBottom: 2 + 'rem' }}>
              <h1 className="herosectionheadertext">Why <span style={textHeaderColor}>Classbook ?</span></h1>
              <p style={subhead}>Get real-time feedback, and collaborate with classmates.</p>
              <p className="herosectionheaderparagraph">simplifies learning and guarantees mastery in an engaging
                and reliable way. With ClassBook, students can learn at their
                own pace, get personalized feedback, and collaborate with
                classmates in a safe and supportive environment.
              </p>
              <Link to="/signup">
                <Button variant="outline-primary" className="button" size="md" >
                  <span style={{ fontSize: 0.9 + 'rem' }}>Sign Up For Free Trial</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </Col>
      </Row>

    </Container>

  );
}

export default MoreDetails;
