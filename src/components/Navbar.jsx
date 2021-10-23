import React, { useState } from "react";
import "../style/components/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import BrandName from "./BrandName";
import Button from "./Button";
import { motion } from "framer-motion";
import { navbarAnimation } from "../Animation";

function Navbar() {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const navbarToggler = () => setToggleNavbar(!toggleNavbar);

    return (
        <motion.div className={`navbar ${toggleNavbar ? "active" : ""}`} variants={navbarAnimation} transition={{ delay: 0.2 }}>
            <div className="col">
                <BrandName />
                <div className="collapseable-button">{!toggleNavbar ? <GiHamburgerMenu onClick={navbarToggler} /> : <AiOutlineClose onClick={navbarToggler} />}</div>
            </div>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#testimonial">Testimonial</a>
                        </li>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                        <li>
                            <Button content="Contact" />
                        </li>
                    </ul>
                </div>
            </nav>
        </motion.div>
    );
}

export default Navbar;
