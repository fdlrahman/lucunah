import React, { useEffect, useState } from "react";
import "../style/pages/Blogs.scss";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Blog from "../components/Blog";
import Title from "../components/Title";
import Footer from "../sections/Home/Footer";
import { useScroll } from "../components/useScroll";
import { containerTopAnimation } from "../Animation";
import { db } from "../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import ScrollToTop from "../components/ScrollToTop";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [element, controls] = useScroll();

    const getBlogsSnap = async () => {
        const blogsCollection = collection(db, "blog");
        const snaps = await onSnapshot(query(blogsCollection, orderBy("timestamp", "desc")), (doc) => {
            const docsSnap = doc.docs.map((snap) => {
                const docs = snap.data();

                return {
                    uid: snap.id,
                    ...docs,
                };
            });

            setBlogs(docsSnap);
        });
    };

    useEffect(() => {
        getBlogsSnap();
    }, []);

    return (
        <div>
            <motion.div className="main-container" ref={element} initial="hidden" animate="show">
                <Navbar isHome={false} />

                <motion.div variants={containerTopAnimation} animate={controls} transition={{ duration: 0.4, type: "tween" }} className="titles">
                    <Title title="Blogs" color="pink" lineCenter={true} />
                </motion.div>

                <div className="blogs__container">
                    {blogs.map((blog, i) => {
                        const { image, title, desc, uid } = blog;
                        return <Blog key={i} image={image} title={title} desc={`${desc.slice(0, 150)}...`} animateCustom={controls} uid={uid} />;
                    })}
                </div>
            </motion.div>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Blogs;
