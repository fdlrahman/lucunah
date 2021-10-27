import React from "react";
import "../../style/sections/About.scss";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { HiLightBulb } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { BsHeadset, BsFillChatSquareTextFill } from "react-icons/bs";
import { headerAnimation } from "../../Animation";
import { motion } from "framer-motion";
import { useScroll } from "../../components/useScroll";

function About() {
    const [element, controls] = useScroll();

    return (
        <div id="about" className="about" ref={element}>
            <div className="main-container">
                <motion.div variants={headerAnimation} animate={controls} transition={{ delay: 0.2, type: "tween" }} className="content">
                    <Title title="About Us" color="blue" />

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora exercitationem autem esse iure repudiandae nulla ea! Earum quaerat dolorem, dolor, officia quos, temporibus quisquam ipsam atque iure ut dolore dignissimos?</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, vel?</p>

                    <Button content="Why Uniqlo?" />
                </motion.div>
                <div className="cards">
                    <Card content="Innovative Ideas" Icon={HiLightBulb} animateCustom={controls} />
                    <Card content="Planning" Icon={MdDateRange} animateCustom={controls} />
                    <Card content="Communication" Icon={BsHeadset} animateCustom={controls} />
                    <Card content="Innovative Ideas" Icon={BsFillChatSquareTextFill} animateCustom={controls} />
                </div>
            </div>
        </div>
    );
}

export default About;
