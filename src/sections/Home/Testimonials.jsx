import React from "react";
import "../../style/sections/Testimonials.scss";
import Title from "../../components/Title";
import Testimonial from "../../components/Testimonial";
import { containerTopAnimation } from "../../Animation";
import { useScroll } from "../../components/useScroll";
import { motion } from "framer-motion";
import Carousel from "react-elastic-carousel";
import { MdNoMealsOuline } from "react-icons/md";

function Testimonials() {
    const [element, controls] = useScroll();

    const whatThemSaid = [
        {
            quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque. ",
            name: "Raditya Dika",
            title: "Comedian",
        },
        {
            quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque. ",
            name: "Uus",
            title: "Comedian",
        },
        {
            quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque. ",
            name: "Kharisna Pabichara",
            title: "Penulis",
        },
    ];

    return (
        <div id="testimonial" className="testimonials" ref={element}>
            <div className="main-container">
                <motion.div variants={containerTopAnimation} animate={controls} transition={{ type: "tween" }} className="titles">
                    <Title title="Testimonials" color="blue" lineCenter={true} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.</p>
                </motion.div>

                <motion.div variants={containerTopAnimation} animate={controls} transition={{ delay: 0.3, type: "tween" }} className="content">
                    <Carousel itemsToShow={2} pagination={false}>
                        {whatThemSaid.map((said) => {
                            const { name, title, quotes } = said;

                            return <Testimonial quote={quotes} name={name} title={title} />;
                        })}
                    </Carousel>
                    {/* <Testimonial
                        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque."
                        name="Ollivia Rodrigo"
                        title="Ex-Justin Bieber"
                    />
                    <Testimonial
                        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque."
                        name="Kim Son Ho"
                        title="Actor"
                    />
                    <Testimonial
                        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime esse dolor nostrum expedita corporis id iusto suscipit pariatur velit dolorem voluptate, eveniet possimus quas sapiente inventore magnam aliquam. Neque."
                        name="Taaranka"
                        title="Actris"
                    /> */}
                </motion.div>
            </div>
        </div>
    );
}

export default Testimonials;
