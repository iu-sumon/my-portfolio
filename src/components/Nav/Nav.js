import React, { useState } from 'react';
import './Nav.css'


const Nav = () => {

    const [active, setActive] = useState('#')

    return (
        <nav>
            <a href="#" className={active === '#' ? 'active' : ''} onClick={() => setActive('#')}>Home</a>
            <a href="#about" className={active === '#about' ? 'active' : ''} onClick={() => setActive('#about')}>About</a>
            <a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={() => setActive('#contact')}>Contact</a>
            <a href="#experience" className={active === '#experience' ? 'active' : ''} onClick={() => setActive('#experience')}>Experience</a>
            <a href="#portfolio" className={active === '#portfolio' ? 'active' : ''} onClick={() => setActive('#portfolio')}>Portfolio</a>
            <a href="#services" className={active === '#services' ? 'active' : ''} onClick={() => setActive('#services')}>Services</a>
        </nav>
    );
};

export default Nav;