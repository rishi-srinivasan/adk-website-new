import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import logo from '../assets/image/logo.svg'
import navIcon2 from '../assets/image/nav-icon2.svg'
import navIcon3 from '../assets/image/nav-icon3.svg'

const Footer = () => {
    return (
        <Footer className={"footer"}>
            <Container>
                <Row className={"align-item-center"}>
                    <Col sm={6}>
                        <img src={logo} alt={"Logo"}/>
                    </Col>
                    <Col sm={6} className={"text-center text-sm-end"}>
                        <div className={"social-icon"}>
                            <a href={"#facebook"}><img src={navIcon2} alt={"Footer Facebook Img"}/></a>
                            <a href={"#instagram"}><img src={navIcon3} alt={"Footer Instagram Img"}/></a>
                        </div>
                        <p>Owned by Studentische Selbstverwaltung (SSV) </p>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};

export default Footer;