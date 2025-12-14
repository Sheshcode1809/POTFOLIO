
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
    ];

    return (
        <section id="about" className="about section">
            <div className="container about-container" ref={ref}>
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">01. About Me</h2>
                    </div>
                    <div className="about-text">
                        <p>
                            Hello! My name is Shesh and I enjoy creating things that live on
                            the internet. My interest in web development started back in 2012
                            when I decided to try editing custom Tumblr themes — turns out
                            hacking together HTML & CSS was quite fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an
                            advertising agency, a start-up, a huge corporation, and a
                            student-led design studio. My main focus these days is building
                            accessible, inclusive products and digital experiences.
                        </p>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h3 className="stat-number">{stat.number}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
