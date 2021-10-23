import React from "react";
import "../style/components/BrandName.scss";

function BrandName({ isFooter = false }) {
    return (
        <div className={`brand ${isFooter ? "isFooter" : ""}`}>
            <span>Uniqlo</span>
        </div>
    );
}

export default BrandName;
