import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services__container'>

                <div className='card_service'>
                    <div className='card_icon'>
                        <i class="fa fa-code"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>I believe this the most easiest and fastest way to build a website with it's built in functionality. Less Cost, Less work and trusted</p>
                    <div className='card_btn'>
                        <a className='btn btn-primary' href="#contact">Let's Talk</a>
                    </div>
                </div>
                <div className='card_service'>
                    <div className='card_icon'>
                    <i class="fa fa-palette"></i>
                    </div>
                    <h3>Web Design</h3>
                    <p>I believe this the most easiest and fastest way to build a website with it's built in functionality. Less Cost, Less work and trusted</p>
                    <div className='card_btn'>
                        <a className='btn btn-primary' href="#contact">Let's Talk</a>
                    </div>
                </div>
                <div className='card_service'>
                    <div className='card_icon'>
                    <i class="fa fa-mobile-alt"></i>
                    </div>
                    <h3>App Development</h3>
                    <p>I believe this the most easiest and fastest way to build a website with it's built in functionality. Less Cost, Less work and trusted</p>
                    <div className='card_btn'>
                        <a className='btn btn-primary' href="#contact">Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;