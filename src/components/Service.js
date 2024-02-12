import React from 'react';
import washImg from '../assets/image/project-img1.png'
import fitnessImg from '../assets/image/project-img2.png'
import kellerImg from '../assets/image/project-img3.png'
import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import {ServiceCard} from "./ServiceCard";
import colorSharp2 from '../assets/image/color-sharp2.png'

export const Service = () => {
    const services =[
        {
            title: "Washing Room",
            description: "Laundry your clothes",
            imgUrl: washImg
        },
        {
            title: "Fitness Studio",
            description: "Laundry your clothes",
            imgUrl: fitnessImg
        },
        {
            title: "Party Keller",
            description: "Laundry your clothes",
            imgUrl: kellerImg
        }
    ]

    return (
    <section className={"service"} id={"service"}>
        <Container>
            <Row>
                <Col size={12}>
                    <h2>Services</h2>
                    <p>List of services available in the dormitory</p>
                    <Tab.Container id={"service-tab"} defaultActiveKey={"first"}>
                        <Nav variant={"pills"} className={"nav-pills mb-5 justify-content-center align-items-center"} id={"pills-tab"}>
                            <Nav.Item>
                                <Nav.Link eventKey={"first"}>Utilities</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"second"}>Recreational</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"third"}>Community</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventkey={"first"}>
                                <Row>
                                    {
                                        services.map((service, index) => {
                                            return(
                                                <ServiceCard
                                                    key={index}
                                                    {...service}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventkey={"second"}>
                                <Row>
                                    {
                                        services.map((service, index) => {
                                            return(
                                                <ServiceCard
                                                    key={index}
                                                    {...service}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventkey={"third"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur nulla et sollicitudin
                                    tempus.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className={"background-image-right"} src={colorSharp2} alt={"serviceImg"}/>
    </section>
    );
}