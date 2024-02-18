import {Col} from "react-bootstrap";
import React from 'react';

export const ServiceCard = ({title,description,imgUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className={"serv-imgbx"}>
                <img src={imgUrl || ''} alt={"serviceImg"}/>
                <div className={"serv-txtx"}>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}