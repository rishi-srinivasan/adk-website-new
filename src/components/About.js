import React from 'react';
import aboutImg from "../assets/image/wohnheim-innen.jpg";
import aboutVid from "../assets/video/video-2.mp4";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


export const About = () => {
    return(
        <div className="about" id="about">
            <div className={"about-overlay"}></div>
            <video src={aboutVid} autoPlay loop muted/>
                <div className={"about-content"}>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} xl={7}>
                                <span className="tagline">About the Dormitory</span>
                                <span className="wrap">
                                <p>A student dormitory located in East Berlin with over 350 residents.</p>
                                    <a href={"https://www.stw.berlin/wohnen/wohnheime/lichtenberg/wh-allee-der-kosmonauten.html"} target={"_blank"} rel="noreferrer">
                                    <button onClick={() => console.log('connect')}>More Info<ArrowRightCircle
                                        size={25}/></button></a>
                                </span>
                            </Col>
                            <Col xs={12} md={6} xl={5}>
                            <img src={aboutImg} alt="Header Img"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </div>
    )
}