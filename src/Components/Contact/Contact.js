import React from 'react'
import './Contact.css'
import X from '../Assets/images/X-Logo.png'
import LinedIn from '../Assets/images/LinkedIn-Logo.png'
import Instagram from '../Assets/images/Instagram-Logo.png'
import { links } from '../Assets/data/links'

const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='contact-main-title'>Contact Me</h2>
            <p className='contact-main-desc'>Please fill out the form below to discuss any work opportunities!</p>

            <form className='contactForm' action="">
                <input type="text" className="contact-name" placeholder='Your Name' />
                <input type="email" className="contact-email" placeholder='Your Email' />
                <textarea className='contact-msg' name="message" id="" rows="5" placeholder='Your Message'></textarea>
                <button className="submit-btn" value='Send' type='submit'>Submit</button>
            </form>

            <div className="socials">
                <a href={links.X} target='__blank'>
                    <img src={X} alt="" className='socials-link' />
                </a>
                <a href={links.Linkedin} target='__blank'>
                    <img src={LinedIn} alt="" className='socials-link' />
                </a>
                <a href={links.Instagram} target='__blank'>
                    <img src={Instagram} alt="" className='socials-link' />
                </a>
            </div>

        </section>
    )
}

export default Contact
