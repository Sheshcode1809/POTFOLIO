
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote:
                "Shesh is a rare breed of designer who understands the technical constraints of development. A pleasure to work with!",
            name: 'Sarah Jenkins',
            role: 'Product Manager at TechFlow',
        },
        {
            id: 2,
            quote:
                "The rebranding work was phenomenal. Our conversion rates increased by 40% after the new site launch.",
            name: 'Michael Chen',
            role: 'Founder of StartUp Inc',
        },
        {
            id: 3,
            quote:
                "Clean, modern, and exactly what we needed. Shesh really took the time to understand our vision.",
            name: 'Emily Davis',
            role: 'Creative Director',
        },
    ];

    const nextTestimonial = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <h2 className="section-title center">03. What People Say</h2>

                <div className="testimonial-slider">
                    <button className="slider-btn prev" onClick={prevTestimonial}>
                        <FaChevronLeft />
                    </button>

                    <div className="testimonial-content-wrapper">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={testimonials[index].id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="testimonial-card"
                            >
                                <FaQuoteLeft className="quote-icon" />
                                <p className="testimonial-quote">{testimonials[index].quote}</p>
                                <div className="testimonial-author">
                                    <h4>{testimonials[index].name}</h4>
                                    <p>{testimonials[index].role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="slider-btn next" onClick={nextTestimonial}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
