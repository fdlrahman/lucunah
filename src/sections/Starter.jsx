import React from "react";
import "../style/sections/Starter.scss";
import WorkImage from "../assets/work.svg";
import Button from "../components/Button";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { imageAnimation, headerAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";

function Starter() {
    const [element, controls] = useScroll();

    return (
        <div className="main-container" ref={element}>
            <Navbar />
            <div className="container">
                <motion.div variants={headerAnimation} animate={controls} transition={{ delay: 0.2, type: "tween" }} className="content">
                    <h1>We Provide Solutions to Help You to Build or Grow Your Business!</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere maiores commodi distinctio tempora quod sit, atque, sapiente expedita magnam, hic ipsam quas sint magni. Accusantium laboriosam tempora perspiciatis doloremque
                        alias.
                    </p>

                    <div className="button-container">
                        <Button content="Explore More" icon={<MdOutlineExplore />} />
                        <Button content="Get Quote" icon={<AiOutlineArrowRight />} color="pink" />
                    </div>
                </motion.div>
                <motion.div variants={imageAnimation} animate={controls} transition={{ type: "tween" }} className="image">
                    <img src={WorkImage} alt="Work Illustration" />
                </motion.div>
            </div>
        </div>
    );
}

export default Starter;
