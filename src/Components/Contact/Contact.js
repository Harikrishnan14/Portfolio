import React, { useRef } from 'react'
import './Contact.css'
import LinedIn from '../Assets/images/LinkedIn-Logo.png'
import Instagram from '../Assets/images/Instagram-Logo.png'
import Whatsapp from '../Assets/images/WhatsApp-Logo.png'
import { links } from '../Assets/data/links'
import emailjs from '@emailjs/browser';

const { REACT_APP_ServiceID, REACT_APP_TemplateID, REACT_APP_Key } = process.env

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_ServiceID, REACT_APP_TemplateID, form.current, REACT_APP_Key)
            .then((result) => {
                e.target.reset();
                alert("Email Send successfully!");
            }, (error) => {
                alert("Email didn't send, Please try again!");
            });
    };

    return (
        <section id='contact'>
            <h2 className='contact-main-title'>Contact Me</h2>
            <p className='contact-main-desc'>Please fill out the form below to discuss any work opportunities!</p>

            <form className='contactForm' ref={form} onSubmit={sendEmail} action="">
                <input type="text" className="contact-name" placeholder='Your Name' name='user_name' />
                <input type="email" className="contact-email" placeholder='Your Email' name='user_email' />
                <textarea className='contact-msg' name="message" id="" rows="5" placeholder='Your Message' ></textarea>
                <button type='submit' className="submit-btn" value='Send'>Submit</button>
            </form>

            <div className="socials">
                <a href={links.Instagram} target='__blank'>
                    <img src={Instagram} alt="" className='socials-link' />
                </a>
                <a href={links.Linkedin} target='__blank'>
                    <img src={LinedIn} alt="" className='socials-link' />
                </a>
                <a href={links.Whatsapp} target="__blank">
                    <img src={Whatsapp} alt="" className='socials-link' />
                </a>
            </div>

        </section>
    )
}

export default Contact
