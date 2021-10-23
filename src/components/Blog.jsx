import React from "react";
import "../style/components/Blog.scss";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { blogAnimation } from "../Animation";

function Blog({ image, title, desc, animateCustom }) {
    return (
        <motion.div variants={blogAnimation} animate={animateCustom} transition={{ delay: 0.2, type: "tween" }} className="blog">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <Button content="Read More" icon={<AiOutlineArrowRight />} color="pink" outline={true} />
            </div>
        </motion.div>
    );
}

export default Blog;
