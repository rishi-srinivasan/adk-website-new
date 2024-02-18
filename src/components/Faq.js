import React, {useState} from 'react';
import {faqData} from "./FaqData";
import {FiPlus, FiMinus} from "react-icons/fi";
import {IconContext} from "react-icons";
import {Container,Row,Col} from "react-bootstrap";

export const Faq = () => {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            // if question is already active, then change icon and open answer
            return setClicked(null)
        }else{
            setClicked(index)
        }
    }
    return (
        <section className={"faq"} id={"faq"}>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h2>FAQs</h2>
                        <p>If you can't find your question please write to us using the form below.</p>
                        <IconContext.Provider value={{color: '#00FFB9', size: '20px'}}>
                            <div className={"faq-box"} id={"faq-box"}>
                                    {
                                        faqData.map((item, index) => {
                                            return (
                                                <>
                                                    <div className={"new-question"} id={"new-question"}
                                                         onClick={() => toggle(index)} key={index}>
                                                        <h1>{item.question}</h1>
                                                        <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                                                    </div>
                                                    {clicked === index ? (
                                                        <div className={"answerss"} id={"answerss"}>
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    ) : null}
                                                </>
                                            )
                                        })
                                    }
                            </div>
                        </IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};