import React from 'react';
import './Footer.css'
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer__logo'>SUMON</a>
            <ul className='permalinks'>
                <li><a href="/home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://web.facebook.com/sumoniu2/" target="_blank" rel="noreferrer"><BsFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
                <a href="https://twiter.com" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Sumon. All right reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;