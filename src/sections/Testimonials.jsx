import React from "react";
import "../style/sections/Testimonials.scss";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { containerTopAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";

function Testimonials() {
    const [element, controls] = useScroll();

    return (
        <div id="testimonial" className="testimonials" ref={element}>
            <div className="main-container">
                <motion.div variants={containerTopAnimation} animate={controls} transition={{ type: "tween" }} className="titles">
                    <Title title="Testimonials" color="blue" lineCenter={true} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.</p>
                </motion.div>

                <motion.div variants={containerTopAnimation} animate={controls} transition={{ delay: 0.3, type: "tween" }} className="content">
                    <Testimonial
                        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque."
                        name="Ollivia Rodrigo"
                        title="Co-Founder"
                    />
                    <Testimonial
                        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque."
                        name="Dean Smith"
                        title="Founder & CEO"
                    />
                    <Testimonial
                        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque."
                        name="John Doe"
                        title="Founder"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Testimonials;
