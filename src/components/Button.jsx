import React from "react";
import "../style/components/Button.scss";

function Button({ content, icon = "", color = "blue", outline = false, isForm = false }) {
    return (
        <button type={isForm ? "submit" : "button"} className={`${color} ${outline ? "outline" : ""}`}>
            {content} {icon}
        </button>
    );
}

export default Button;
