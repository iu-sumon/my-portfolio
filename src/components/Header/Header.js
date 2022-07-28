import React from 'react';
import CTA from './CTA';
import './Header.css'
import Me from '../../assets/me22.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>

            <div className="container header__container">

                <h5>Hello I'm</h5>

                <h1>Sumon</h1>

                <h5 className="text-light">Front End Developer</h5>

                <CTA />

                <HeaderSocials />
                
                <img src={Me} alt="me" />
               

                <a href="#contact" className='scroll__down'>Scroll Down</a>
                
            </div>

        </header>
    );
};

export default Header;