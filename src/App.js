import Starter from "./sections/Starter";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <motion.div initial="hidden" animate="show" className="App">
            <Starter />
            <About />
            <Services />
            <Testimonials />
            <Blogs />
            <Footer />
            <ScrollToTop />
        </motion.div>
    );
}

export default App;
