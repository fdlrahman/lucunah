import React from "react";
import "../style/components/Blog.scss";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { blogAnimation } from "../Animation";
import { Link } from "react-router-dom";

function Blog({ image, title, desc, animateCustom, uid = false }) {
    return (
        <motion.div variants={blogAnimation} animate={animateCustom} transition={{ delay: 0.2, type: "tween" }} className="blog">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="content">
                <h3>{title.length > 26 ? `${title.slice(0, 26)}...` : title}</h3>
                <p dangerouslySetInnerHTML={{ __html: desc.length > 149 ? `${desc.slice(0, 149)}...` : desc }}></p>
                {uid ? (
                    <Link to={`blogs/${uid}`}>
                        <Button content="Read More" icon={<AiOutlineArrowRight />} color="pink" outline={true} />
                    </Link>
                ) : (
                    <Button content="Read More" icon={<AiOutlineArrowRight />} color="pink" outline={true} />
                )}
            </div>
        </motion.div>
    );
}

export default Blog;
