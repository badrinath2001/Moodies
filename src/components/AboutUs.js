import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../styles/AboutUs.css';
import logo2 from './logo4.jpg';
const AboutUs=()=>{
    return(
        <Container id="AboutUs">
            <Row>
                
            <h3 id="main"><strong><legend><i>"Remember Red, hope is a good thing, maybe the best of things"</i></legend></strong> </h3>
            </Row>
            <Row>
                <Col md='7'></Col>
                <Col md='3'><strong id='movie'><legend><i>-Shawshank Redemption</i></legend></strong></Col>
            </Row>
            <Row>
                <Col md='3'></Col>
                <Col md='6'>
             <p>Moodies is your one stop destination to find your movie to watch based on your mood. Get movie recommendations based on your mood straight off the biggest movie platform - IMDB.</p>
                </Col>
            </Row>
             <br></br>
             <Row>
             <Col md='3'></Col>
                <Col md='6'>
             <p>This website was developed by a group of 6 engineering who have done multiple surveys to categories numerous movies under different movies. Moodies shall help you find the correct movie for the best movie experience.</p>
                    </Col>
             </Row><br></br>
            <Row>
                <Col md='4'></Col>
              <Col md='4'> <img src={logo2} id="logo2"/></Col>
              <Col md='4'></Col>
            </Row>
        </Container>
    )
}
export default AboutUs;