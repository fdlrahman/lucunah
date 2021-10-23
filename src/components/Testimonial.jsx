import React from "react";
import "../style/components/Testimonial.scss";
import { ImQuotesLeft } from "react-icons/im";

function Testimonial({ quote, name, title }) {
    return (
        <div className="testimonial">
            <div className="quote">
                <ImQuotesLeft />
                <p>{quote}</p>
            </div>
            <div className="name">
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Testimonial;
