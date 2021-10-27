import React, { useEffect } from "react";
import "../style/pages/Create.scss";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Create from "../components/Create";
import Footer from "../sections/Home/Footer";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import ScrollToTop from "../components/ScrollToTop";

function Creates() {
    const [element, controls] = useScroll();

    const handleSendData = async (title, urlImage, desc) => {
        const data = { title, image: urlImage, desc, timestamp: serverTimestamp() };

        const docRef = await addDoc(collection(db, "blog"), data);
    };

    return (
        <motion.div className="creates" initial="hidden" animate="show">
            <div className="main-container" ref={element}>
                <Navbar isHome={false} />

                <Title title="Create" color="pink" lineCenter={true} />

                <Create animateCustom={controls} handleSendData={handleSendData} />
            </div>
            <Footer />
            <ScrollToTop />
        </motion.div>
    );
}

export default Creates;
