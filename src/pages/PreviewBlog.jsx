import React, { useEffect, useState } from "react";
import "../style/pages/PreviewBlog.scss";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../sections/Home/Footer";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import { containerTopAnimation } from "../Animation";
import ScrollToTop from "../components/ScrollToTop";

function PreviewBlog() {
    const [element, controls] = useScroll();
    const [docs, setDocs] = useState({});

    let { uid } = useParams();

    const getData = async () => {
        const docRef = doc(db, "blog", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setDocs(docSnap.data());
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <motion.div initial="hidden" animate="show" className="preview__blog">
            <motion.div className="main-container" variants={containerTopAnimation} animate={controls} transition={{ type: "tween" }} ref={element}>
                <Navbar isHome={false} />

                <div className="titles">
                    <Title title={docs.title} color="pink" lineCenter={true} />
                    <p>
                        *Note: Kami tidak ada niatan untuk menghina atau menjelekkan suatu pihak, Ini hanya candaan atau humor untuk sebagian orang. Harap untuk tidak terlalu menganggap serius, Sekali sekali nyantuy lah sambil menikmati candaan,
                        LucuNah!
                    </p>
                </div>

                <div className="image" style={{ backgroundImage: `url(${docs.image})` }}></div>

                <div className="content" dangerouslySetInnerHTML={{ __html: docs.desc }}></div>
            </motion.div>
            <Footer />
            <ScrollToTop />
        </motion.div>
    );
}

export default PreviewBlog;
