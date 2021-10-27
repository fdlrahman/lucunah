import React from "react";
import "../style/components/BrandName.scss";
import { Link } from "react-router-dom";

function BrandName({ isFooter = false }) {
    return (
        <Link to="/">
            <div className={`brand ${isFooter ? "isFooter" : ""}`}>
                <span>LUCUNAH</span>
            </div>
        </Link>
    );
}

export default BrandName;
