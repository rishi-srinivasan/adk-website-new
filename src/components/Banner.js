import {Container, Row, Col} from "react-bootstrap";
import {ReactTyped} from "react-typed";
import headerImg from "../assets/image/header-img.svg"
//import TrackVisibility from "react-on-screen";
import 'animate.css'
//import {isVisible} from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {/*<TrackVisibility>*/}
                        {/*    {({ isVisible }) =>*/}
                        {/*    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>*/}
                                <span className="tagline">Welcome to WH Allee der Kosmonauten</span>
                                <h2><span className="wrap"><ReactTyped
                                    strings={[
                                        "We are a student dorm",
                                        "We are a community",
                                        "We are adk"
                                    ]}
                                    typeSpeed={150}
                                    backSpeed={50}
                                    loop>
                            </ReactTyped></span></h2>
                                <p>
                                    A student dormitory located in Berlin with over 350 international students.
                                </p>
                            {/*</div>}*/}
                        {/*</TrackVisibility>*/}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg || ''} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}