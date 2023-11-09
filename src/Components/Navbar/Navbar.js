import React from 'react'
import './Navbar.css'
import Logo from '../Assets/images/Logo.png'
import Contact from '../Assets/images/Contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <img className='logo' src={Logo} alt="" />
            <div className="nav-menu">
                <Link to='' className='nav-menu-item'>About</Link>
                <Link to='' className='nav-menu-item'>Skills</Link>
                <Link to='' className='nav-menu-item'>Projects</Link>
                <Link to='' className='nav-menu-item'>Education</Link>
            </div>
            <button className="contact-btn">
                <img className='contact' src={Contact} alt="" />
                <p>Contact Me</p>
            </button>

        </nav>
    )
}

export default Navbar
