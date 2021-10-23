import React from "react";
import "../style/sections/Footer.scss";
import BrandName from "../components/BrandName";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegPaperPlane, FaFacebookF } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { toUpAnimation, toDownAnimation } from "../Animation";

const quickLinks = ["About", "Testimonial", "Contact Us", "Portfolio", "Career", "Terms & Condition", "Privacy Policy"];
const industries = ["Website Development", "Mobil App Development", "Website Design", "Mobile App Design", "Digital Marketing", "Graphic Design", "IOS App Development"];

function Footer() {
    const [element, controls] = useScroll();

    return (
        <div className="footer" ref={element}>
            <div className="main-container">
                <div className="footer__top">
                    <motion.div variants={toUpAnimation} animate={controls} className="one">
                        <BrandName isFooter={true} />
                        <p>Join our newsletter to get updated with our offices & discount</p>

                        <form>
                            <input type="text" placeholder="Please Enter Your Email" />
                            <button>
                                <FaRegPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                    <motion.div variants={toDownAnimation} animate={controls} className="two sections">
                        <h3>Quick Links</h3>
                        <ul>
                            {quickLinks.map((link, key) => {
                                return (
                                    <li key={key}>
                                        <a href="#">{link}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                    <motion.div variants={toUpAnimation} animate={controls} className="three sections">
                        <h3>Industries</h3>
                        <ul>
                            {industries.map((link, key) => {
                                return (
                                    <li key={key}>
                                        <a href="#">{link}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                    <motion.div variants={toDownAnimation} animate={controls} className="four sections">
                        <h3>Get In Touch</h3>
                        <div className="contact">
                            <AiOutlineMail />
                            <div className="content">
                                <h5>Email</h5>
                                <p>uniqlo@services.com</p>
                            </div>
                        </div>
                        <div className="contact">
                            <BiPhone />
                            <div className="content">
                                <h5>Phone</h5>
                                <p>+6281247026219</p>
                            </div>
                        </div>
                        <div className="contact">
                            <GoLocation />
                            <div className="content">
                                <h5>Address</h5>
                                <p>Kumala II, South Sulawesi</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <hr />
                <div className="footer__bottom">
                    <p>Copyright 2021. All Rights Reserved</p>
                    <div className="social-media">
                        <div className="square">
                            <FaFacebookF />
                        </div>
                        <div className="square">
                            <BsInstagram />
                        </div>
                        <div className="square">
                            <BsYoutube />
                        </div>
                        <div className="square">
                            <BsTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
