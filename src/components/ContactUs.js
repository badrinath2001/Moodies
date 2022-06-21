import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../styles/contactus.css';
import logo2 from './logo4.jpg';
const ContactUs=()=>{
    return(<>
    <Container id="contactus">
        <Row id='Rowc'>
            <Col md='2'></Col>
            <Col md='4'>
                <Row>
                    <Col md='12'>
                       <h3>We're here</h3> 
                    </Col>
                    
                </Row>
                <Row>
                    <Col md='12'>
                        Our Door is always Open for a Movie on your Mood 
                    </Col>

                    
                  
                </Row>
                <Row>
                    <Col>
                    <a href="https://www.facebook.com/profile.php?id=100010414629291"><img src="https://www.facebook.com/images/fb_icon_325x325.png" id="facebook"/></a>
                    <a href="https://www.instagram.com/mr.__.abhishek/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png" id="instragram"/></a>
                    <a href="https://github.com/naravaabhishek/Moodies"><img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" id="github"/></a></Col>
                </Row>
            </Col>
         
            <Col md='4' id='col2'>
                <Row>
                    <Col>
                    <h3 id="let"><strong><legend><i>Let's talk</i></legend></strong> </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>Share your Experience with us</Col>
                </Row>
                <Row>
                    <Col>
                    <a href="mail:naravaabhishek@gmail.com">naravaabhishek@gmail.com &#10145;</a>  
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
                <Col md='4'></Col>
              <Col md='4'> <img src={logo2} id="logo2"/></Col>
              <Col md='4'></Col>
            </Row>
    </Container>
    </>)
}
export default ContactUs;