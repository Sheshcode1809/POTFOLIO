
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
            <p className="footer-text">
                Designed & Built by <a href="https://github.com/sheshkanade">Shesh Kanade</a>
            </p>
        </footer>
    );
};

export default Footer;
