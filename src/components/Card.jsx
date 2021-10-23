import React from "react";
import "../style/components/Card.scss";
import { motion } from "framer-motion";
import { cardAnimation } from "../Animation";

function Card({ content, Icon = "", animateCustom }) {
    return (
        <motion.div variants={cardAnimation} animate={animateCustom} transition={{ type: "tween", delay: 0.2 }} className="card">
            <div className="icon">{Icon ? <Icon /> : ""}</div>
            <h2>{content}</h2>
        </motion.div>
    );
}

export default Card;
