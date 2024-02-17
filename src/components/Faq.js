import React, {useState} from 'react';
import {faqData} from "./FaqData";
import {FiPlus, FiMinus} from "react-icons/fi";
import {IconContext} from "react-icons";

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
            <h2>FAQs</h2>
            <p>If you can't find your question please write to us using the form below.</p>
            <IconContext.Provider value={{color: '#00FFB9', size: '20px'}}>
                <div className={"faq-question"} id={"faq-question"}>
                    <div className={"div-question"} id={"div-question"}>
                        {
                            faqData.map((item, index) => {
                                return (
                                    <>
                                        <div className={"new-question"} id={"new-question"} onClick={() => toggle(index)} key={index}>
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
                </div>
            </IconContext.Provider>
        </section>
    );
};