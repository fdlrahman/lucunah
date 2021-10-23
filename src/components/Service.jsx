import React from "react";
import "../style/components/Service.scss";
import CheckCircle from "../assets/check-circle.svg";

function Service({ content }) {
    return (
        <li className="service">
            <img src={CheckCircle} alt="Check Circle" /> {content}
        </li>
    );
}

export default Service;
