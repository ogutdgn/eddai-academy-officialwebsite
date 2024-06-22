// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import about_2 from "../assets/img/home_main_img.jpeg";

const About = () => {
    return (
        <div className="about-area ptb-100 section-bg">
            <div className="container">
                <motion.div className="row align-items-center"
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={about_2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="sub-t">About Us</div>
                            <h2>Create your own AI business easily.</h2>
                            <p>Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Nam aliquam sem et tortor consequat. Porttitor leo a diam sollicitudin tempor id eu. Nisl pretium fusce id velit ut. At lectus urna duis convallis convallis tellus id interdum.</p>
                            <ul className="benefits-list">
                                <li><i className="ri-check-line"></i> Quis autem vel eum iure reprehenderit aui ratione</li>
                                <li><i className="ri-check-line"></i> Suscipit laboriosam nisi rut aliuid eum iure moli venia</li>
                                <li><i className="ri-check-line"></i> Dolor repellendus temporibus autem auibus dolor</li>
                            </ul>
                            <Link className="main-btn" to="/about">
                                <span></span>
                                <i className="ri-quill-pen-line"></i> About Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
