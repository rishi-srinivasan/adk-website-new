import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
// import fitnessImg from '../assets/image/project-img2.png'
// import kellerImg from '../assets/image/project-img3.png'
import colorSharp2 from '../assets/image/color-sharp2.png'

export const Service = () => {

    // const services= [
    //     {
    //         title: "Washing Room",
    //         description: "Laundry your clothes",
    //         imgUrl: washImg
    //     },
    //     {
    //         title: "Fitness Studio",
    //         description: "Laundry your clothes",
    //         imgUrl: fitnessImg
    //     },
    //     {
    //         title: "Party Keller",
    //         description: "Laundry your clothes",
    //         imgUrl: kellerImg
    //     }
    // ]

    return (
    <section className={"service"} id={"service"}>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <h2>Services</h2>
                    <p>List of services available in the dormitory</p>
                </Col>
            </Row>
        </Container>
        <img className={"background-image-right"} src={colorSharp2 || ''} alt={"serviceImg"}/>
    </section>
    );
}