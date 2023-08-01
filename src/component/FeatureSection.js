import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { easeOut, motion } from 'framer-motion';
import personalizedlearning from '../component/Assets/images/personalizedlearning.svg';
// import Realtimefeedback from '../component/Assets/images/Realtimefeedback.svg';
// import supportiveenvironment from '../component/Assets/images/supportiveenvironment.svg';
// import collaborativelearning from '../component/Assets/images/collaborativelearning.svg';


import '../index.css';

function FeatureSection() {

  return (

    <Container fluid className="features" >
      <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
        <center>
          <h3 className="featurehead">Leverage the Benefits of SAFSIMS<br/> Virtual School Platform</h3>
          <p className="featureparagraph">get personalized feedback, and collaborate
            with classmates in a safe and supportive
            environment.</p>
        </center>
      </motion.div>

      <Row className="featurerow">
        <Row>
          <Col xs={12} md={8} lg={7}>
            <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
              <div className="featurecardbody">
                <div style={{ display: 'flex', gap: 0 + 'rem', alignItems: 'center' }}>
                  <Image src={personalizedlearning} fluid />
                  <div>
                    <h6 className="featureeachhead" >Personalized Learning</h6>
                    <div style={{ marginTop: 0.2 + 'rem' }}>
                      <p className="featureeachparagraph">ClassBook tracks each student's progress and adapts the curriculum accordingly.</p>
                    </div>
                  </div>
                </div>



              </div>
            </motion.div>
          </Col>
          <Col  xs={12} md={4} lg={5}></Col>
        </Row>
        <Row>
        <Col  xs={12} md={4} lg={5}></Col>
          <Col xs={12} md={8} lg={7}>
            <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
              <div  className="featurecardbody">
                <div style={{display:'flex', gap:0+'rem',alignItems:'center'}}>
                  <Image src={personalizedlearning} fluid />
                  <div>
                    <h6 className="featureeachhead" >Personalized Learning</h6>
                    <div style={{ marginTop: 0.5 + 'rem' }}>
                    <p className="featureeachparagraph">ClassBook tracks each student's progress and adapts the curriculum accordingly.</p>
                    </div>
                  </div>
                </div>                
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8} lg={7}>
            <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
              <div className="featurecardbody">
                <div style={{ display: 'flex', gap: 0 + 'rem', alignItems: 'center' }}>
                  <Image src={personalizedlearning} fluid />
                  <div>
                    <h6 className="featureeachhead" >Personalized Learning</h6>
                    <div style={{ marginTop: 0.5 + 'rem' }}>
                      <p className="featureeachparagraph">ClassBook tracks each student's progress and adapts the curriculum accordingly.</p>
                    </div>
                  </div>
                </div>



              </div>
            </motion.div>
          </Col>
          <Col  xs={12} md={4} lg={5}></Col>
        </Row>

        <Row>
        <Col  xs={12} md={4} lg={5}></Col>
          <Col xs={12} md={8} lg={7}>
            <motion.div initial={{ opacity: 0, y: 40, }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.4, timingFunction: easeOut }} viewport={{ once: true }}>
              <div  className="featurecardbody">
                <div style={{display:'flex', gap:0+'rem',alignItems:'center'}}>
                  <Image src={personalizedlearning} fluid />
                  <div>
                    <h6 className="featureeachhead" >Personalized Learning</h6>
                    <div style={{ marginTop: 0.5 + 'rem' }}>
                    <p className="featureeachparagraph">ClassBook tracks each student's progress and adapts the curriculum accordingly.</p>
                    </div>
                  </div>
                </div>                
              </div>
            </motion.div>
          </Col>
        </Row>



      </Row>
    </Container>

  );
}

export default FeatureSection;
