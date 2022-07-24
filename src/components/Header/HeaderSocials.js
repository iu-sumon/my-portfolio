import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://web.facebook.com/sumoniu2/" target="_blank" rel="noreferrer"><BsFacebook/></a>
            <a href="https://www.linkedin.com/in/iu-sumon/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://twitter.com/iu_sumon" target="_blank" rel="noreferrer"><BsTwitter /></a>
            <a href="https://github.com/iu-sumon" target="_blank" rel="noreferrer"><BsGithub /></a>

        </div>
    );
};

export default HeaderSocials;