import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';

import stillbuilding from './Assets/images/stillbuilding.svg';

import { Link } from "react-router-dom";






function Buildpage(props) {

    const Header = {
        fontSize: 1.8 + 'rem',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 'bold',
        color: '#0D6EFD',
    }


    return (
        <Container fluid style={{ marginTop: 1.5 + 'vh', width: 100 + '%' }}>
            <center>
                <Image style={{ width: 18 + 'rem' }} src={stillbuilding} fluid />
                <div>
                    <h1 style={Header}>Page Under Development</h1>
                    <p className="FormParagraph">The <span style={{color:'#0D6EFD',fontWeight:'500'}}>{props.pages}</span> is under development you can check back later
                    </p>
                    <Link to="/waitlist">
                        <Button variant="primary" className="button" size="md" >
                            {" "}
                            <span style={{ fontSize: 0.8 + 'rem' }}>Join Our Waitlist</span>
                            {" "}
                        </Button>
                    </Link>
                </div>

            </center>

        </Container>
    );
}

export default Buildpage;
