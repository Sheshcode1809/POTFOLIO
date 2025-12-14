
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'Neon Brand',
            category: 'Branding',
            image: 'https://placehold.co/600x400/112240/64ffda?text=Neon+Brand',
            description: 'A futuristic brand identity for a tech startup.',
        },
        {
            id: 2,
            title: 'E-Commerce UI',
            category: 'Web',
            image: 'https://placehold.co/600x400/233554/64ffda?text=E-Commerce',
            description: 'Modern shopping experience design.',
        },
        {
            id: 3,
            title: 'Abstract Art',
            category: 'Illustration',
            image: 'https://placehold.co/600x400/0a192f/64ffda?text=Abstract',
            description: 'Series of digital abstract illustrations.',
        },
        {
            id: 4,
            title: 'Coffee Shop App',
            category: 'Web',
            image: 'https://placehold.co/600x400/112240/64ffda?text=Coffee+App',
            description: 'Mobile app design for a local roastery.',
        },
        {
            id: 5,
            title: 'Minimal Logo',
            category: 'Branding',
            image: 'https://placehold.co/600x400/233554/64ffda?text=Minimal+Logo',
            description: 'Clean and timeless logo design.',
        },
        {
            id: 6,
            title: 'Character Design',
            category: 'Illustration',
            image: 'https://placehold.co/600x400/0a192f/64ffda?text=Character',
            description: 'Character concepts for a game.',
        },
    ];

    const filteredProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter);

    const filters = ['All', 'Branding', 'Web', 'Illustration'];

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">02. Selected Work</h2>
                </div>

                <div className="portfolio-filters">
                    {filters.map((f) => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <motion.div className="portfolio-grid" layout>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="portfolio-item"
                            >
                                <div className="portfolio-content">
                                    <div className="portfolio-image">
                                        {/* Using a colored div to simulate image if placeholder fails, or just img */}
                                        <img src={project.image} alt={project.title} loading="lazy" />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-cat">{project.category}</p>
                                        <p className="project-desc">{project.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
