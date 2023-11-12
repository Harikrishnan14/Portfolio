import React from 'react'
import './Contact.css'
import X from '../Assets/images/X-Logo.png'
import LinedIn from '../Assets/images/LinkedIn-Logo.png'
import Instagram from '../Assets/images/Instagram-Logo.png' 

const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='contact-main-title'>Contact Me</h2>
            <p className='contact-main-desc'>Please fill out the form below to discuss any work opportunities!</p>

            <form className='contactForm' action="">
                <input type="text" className="contact-name" placeholder='Your Name'/>
                <input type="email" className="contact-email" placeholder='Your Email'/>
                <textarea className='contact-msg' name="message" id="" rows="5" placeholder='Your Message'></textarea>
                <button className="submit-btn" value='Send' type='submit'>Submit</button>
            </form>

            <div className="socials">
                <img src={X} alt="" className='socials-link' />
                <img src={LinedIn} alt="" className='socials-link' />
                <img src={Instagram} alt="" className='socials-link' />
            </div>

        </section>
    )
}

export default Contact
