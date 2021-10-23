import React from "react";
import "../style/components/Title.scss";

function Title({ title, color, lineCenter = false }) {
    return (
        <div className={`title ${lineCenter ? "center" : ""}`}>
            <h2>{title}</h2>
            <div className={color}></div>
        </div>
    );
}

export default Title;
