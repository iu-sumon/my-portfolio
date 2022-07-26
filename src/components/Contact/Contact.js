import React from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option_icon'/>
                        <h4>Email</h4>
                        <h5>md.sumon35855@gmail.com</h5>
                        <a href="mailto:md.sumon35855@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className='contact__option_icon'/>
                        <h4>Messenger</h4>
                        <h5>Sumon</h5>
                        <a href="https://m.me/sumoniu2" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option_icon'/>
                        <h4>whatsApp</h4>
                        <h5>+8801749036855</h5>
                        <a href="https://api.whatsapp.com/send?phone=8801749036855" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <div>
                    <form action="">
                        <input type="text" name='' placeholder='Your Full Name' required />
                        <input type="email" name='' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                        <div className='form-btn'>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;