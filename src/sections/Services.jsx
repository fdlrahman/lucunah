import React from "react";
import "../style/sections/Services.scss";
import Title from "../components/Title";
import { BsPlayFill } from "react-icons/bs";
import Service from "../components/Service";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { containerTopAnimation, toLeftAnimation, toRightAnimation } from "../Animation";

function Services() {
    const [element, controls] = useScroll();

    return (
        <div id="services" className="services" ref={element}>
            <div className="main-container">
                <motion.div variants={containerTopAnimation} animate={controls} transition={{ type: "tween" }} className="titles">
                    <Title title="Why Us?" color="pink" lineCenter={true} />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, quisquam?</p>
                </motion.div>
                <div className="content">
                    <motion.div variants={toRightAnimation} animate={controls} transition={{ delay: 0.2, duration: 0.5, type: "tween" }} className="video">
                        <div className="play">
                            <BsPlayFill />
                        </div>
                    </motion.div>
                    <motion.div variants={toLeftAnimation} animate={controls} transition={{ delay: 0.2, duration: 0.5, type: "tween" }} className="services">
                        <ul>
                            <Service content="Lorem, ipsum dolor sit amet consectetur adipisicing." />
                            <Service content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam unde explicabo?" />
                            <Service content="Lorem, ipsum dolor sit amet" />
                            <Service content="Lorem, ipsum dolor sit amet consectetur" />
                            <Service content="Lorem, ipsum dolor sit adipisicing." />
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Services;
