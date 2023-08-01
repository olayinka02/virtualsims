import React from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { easeOut, motion } from 'framer-motion';
import mockup from '../component/Assets/images/mockup.png';
import downloadgoogle from '../component/Assets/images/downloadgoogle.svg';
import downloadappstore from '../component/Assets/images/downloadappstore.svg';



import '../index.css';

function DownloadApp() {

  const textHeaderColor = {
    color: '#437EF7',
  }
  const mobilearea = {
    backgroundColor: '#E0EDFF',
    height: 'auto',
    borderRadius: 1 + 'rem',
  }
 

  return (
    
      <Container fluid className="mobileapp">
        <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
          <Container fluid className="mainmobileapp">
            <Row className="mobileapprow" style={mobilearea}>
              <Col xs={12} md={6} lg={6}>
                <div className="contentsection" style={{ paddingTop: 2 + 'rem', paddingBottom: 2 + 'rem', paddingLeft: 0.1 + 'rem', }}>
                  <h1 className="herosectionheadertext">The <span style={textHeaderColor}>Personalize Virtual</span> Classroom</h1>
                  <p className="herosectionheaderparagraph">
                    simplifies learning and guarantees mastery in an engaging
                    and reliable way. With ClassBook, students can learn at their
                    own pace, get personalized feedback, and collaborate with
                    classmates in a safe and supportive environment.
                  </p>

                  <div style={{ display: 'flex', gap: 0.3 + 'rem' }}>
                    <Button variant="primary" className="button-store" size="sm" >
                      <Image src={downloadgoogle} alt="Image" className="button-image" />
                    </Button>
                    {' '}
                    <Button variant="primary" className="button-store" size="sm" >
                      <Image src={downloadappstore} alt="Image" className="button-image" />
                    </Button>
                  </div>


                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className="col-content">
                  <Image src={mockup} fluid className="img-fluid mockup-img" alt="mockup" />
                </div>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </Container>
  );
}

export default DownloadApp;
