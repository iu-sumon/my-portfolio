import React, { useState } from 'react';
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const Nav = () => {

    const [active, setActive] = useState('#')

    return (
        <nav>

            <div className="nav__container">
                <div className="icon home">
                    <div className="tooltip">Home</div>

                    <a href="/" className={active === '#' ? 'active' : ''} onClick={() => setActive('#')}><AiOutlineHome className='react-icon' /></a>
                </div>


                <div className="icon about">
                    <div className="tooltip">About</div>

                    <a href="#about" className={active === '#about' ? 'active' : ''} onClick={() => setActive('#about')}><AiOutlineUser className='react-icon' /></a>
                </div>


                <div className="icon skill">
                    <div className="tooltip">Skills</div>

                    <a href="#experience" className={active === '#experience' ? 'active' : ''} onClick={() => setActive('#experience')}><BiBook className='react-icon' /></a>
                </div>


                <div className="icon services">
                    <div className="tooltip">Services</div>

                    <a href="#services" className={active === '#services' ? 'active' : ''} onClick={() => setActive('#services')}><RiServiceLine className='react-icon' /></a>
                </div>


                <div className="icon portfolio">
                    <div className="tooltip">Portfolio</div>

                    <a href="#portfolio" className={active === '#portfolio' ? 'active' : ''} onClick={() => setActive('#portfolio')}><AiOutlineFundProjectionScreen className='react-icon' /></a>
                </div>


                <div className="icon contact">
                    <div className="tooltip">Contact</div>

                    <a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={() => setActive('#contact')}><BiMessageSquareDetail className='react-icon' /></a>

                </div>


            </div>
        </nav>
    );
};

export default Nav;