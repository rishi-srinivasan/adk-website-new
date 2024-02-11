import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/image/header-img.svg"
import {ReactTyped} from "react-typed";

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to WH Allee der Kosmonauten</span>
                        <h2><span className="wrap"><ReactTyped
                            strings={[
                                "We are a student dorm",
                                "We are a community",
                                "We are a place for camaraderie"
                            ]}
                            typeSpeed={150}
                            backSpeed={50}
                            loop>
                        </ReactTyped></span></h2>
                        <p>
                            A student dormitory located in East Berlin with over 350 residents.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}