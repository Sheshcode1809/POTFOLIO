
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section className="hero section">
            <div className="container hero-container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="hero-content"
                >
                    <motion.p variants={item} className="hero-greeting">
                        Hi, my name is
                    </motion.p>
                    <motion.h1 variants={item} className="hero-name">
                        Shesh Kanade.
                    </motion.h1>
                    <motion.h2 variants={item} className="hero-subtitle">
                        I design and build digital experiences.
                    </motion.h2>
                    <motion.p variants={item} className="hero-description">
                        I'm a graphic designer and web developer specializing in building (and
                        occasionally designing) exceptional digital experiences. Currently,
                        I'm focused on building accessible, human-centered products.
                    </motion.p>
                    <motion.div variants={item} className="hero-cta">
                        <a href="#portfolio" className="btn btn-outline">
                            Check out my work
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
