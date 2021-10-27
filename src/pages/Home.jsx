import Starter from "../sections/Home/Starter";
import About from "../sections/Home/About";
import Services from "../sections/Home/Services";
import Testimonials from "../sections/Home/Testimonials";
import Footer from "../sections/Home/Footer";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
    return (
        <motion.div initial="hidden" animate="show" className="App">
            <Starter />
            <About />
            <Services />
            <Testimonials />
            <Footer />
            <ScrollToTop />
        </motion.div>
    );
}

export default Home;
