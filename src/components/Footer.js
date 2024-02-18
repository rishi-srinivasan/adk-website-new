import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import logo from '../assets/image/logo.svg'
import navIcon2 from '../assets/image/nav-icon2.svg'
import navIcon3 from '../assets/image/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className={"footer"}>
            <Container>
                <Row className={"align-item-center"}>
                    <Col sm={6}>
                        <img src={logo || ''} alt={"Logo"}/>
                        <p>Allee der Kosmonauten 20, 10315 Berlin, Germany</p>
                    </Col>
                    <Col sm={6} className={"text-center text-sm-end"}>
                        <div className={"social-icon"}>
                            <a href="https://www.facebook.com/ssvAdK" target={"_blank"} rel="noreferrer"><img
                                src={navIcon2 || ''} alt={"Footer Facebook Img"}/></a>
                            <a href="https://www.instagram.com/adk20official?igsh=MXByMWl3Z2prbGxycA=="
                               target={"_blank"} rel="noreferrer"><img
                                src={navIcon3 || ''} alt={"Footer Instagram Img"}/></a>
                            <p>Created and owned by Studentische Selbstverwaltung(SSV) of ADK</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};