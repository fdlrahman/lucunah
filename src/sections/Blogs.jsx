import React from "react";
import "../style/sections/Blogs.scss";
import Title from "../components/Title";
import Blog from "../components/Blog";
import Button from "../components/Button";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { containerTopAnimation } from "../Animation";

function Blogs() {
    const [element, controls] = useScroll();

    return (
        <div id="blog" className="blogs" ref={element}>
            <div className="main-container">
                <motion.div variants={containerTopAnimation} animate={controls} transition={{ type: "tween" }} className="titles">
                    <Title title="Blogs" color="pink" lineCenter={true} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </motion.div>
                <div className="contents">
                    <Blog
                        title="Top list of Mistakes to Avoid During MVP Development"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est minus sequi a in odit voluptates voluptas doloremque"
                        image={BlogImage1}
                        animateCustom={controls}
                    />
                    <Blog
                        title="Top list of Mistakes to Avoid During MVP Development"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est minus sequi a in odit voluptates voluptas doloremque"
                        image={BlogImage2}
                        animateCustom={controls}
                    />
                    <Blog
                        title="Top list of Mistakes to Avoid During MVP Development"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est minus sequi a in odit voluptates voluptas doloremque"
                        image={BlogImage3}
                        animateCustom={controls}
                    />
                </div>
                <motion.div variants={containerTopAnimation} animate={controls} transition={{ delay: 0.8, type: "tween" }} className="button">
                    <Button content="View All" />
                </motion.div>
            </div>
        </div>
    );
}

export default Blogs;
