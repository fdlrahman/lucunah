import React, { useState } from "react";
import "../style/components/ScrollToTop.scss";
import { BsTriangle } from "react-icons/bs";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const checkVisible = () => {
        if (document.documentElement.scrollTop > 0) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrolltotop = () => {
        document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", checkVisible);

    return (
        <div className={`scrollToTop ${visible ? "" : "notVisible"}`} onClick={scrolltotop}>
            <BsTriangle />
        </div>
    );
}

export default ScrollToTop;
