import React from "react";
import "../style/components/Button.scss";

function Button({ content, icon = "", color = "blue", outline = false }) {
    return (
        <button className={`${color} ${outline ? "outline" : ""}`}>
            {content} {icon}
        </button>
    );
}

export default Button;
