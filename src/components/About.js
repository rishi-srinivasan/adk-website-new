import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import aboutImg from "../assets/image/about.jpg";

export const About = () => {
    return(
        <div className="about" id="about">
            {/*<video src={aboutVid} autoPlay loop muted>*/}
                <div className={"content"}>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} xl={7}>
                                <span className="tagline">About the Dormitory</span>
                                <span className="wrap">
                        <p>
                            A student dormitory located in East Berlin with over 350 residents.
                        </p></span>
                            </Col>
                            <Col xs={12} md={6} xl={5}>
                                <img src={aboutImg} alt="Header Img"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            {/*</video>*/}
        </div>
    )
}