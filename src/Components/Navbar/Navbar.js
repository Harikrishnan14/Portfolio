import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/images/Logo.png'
import Contact from '../Assets/images/Contact.png'
import { Link } from 'react-scroll'
import BurgerMenu from '../Assets/images/BurgerMenu.png'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='Navbar'>
            <img className='logo' src={Logo} alt="" />
            <div className="nav-menu">
                <Link to='intro' smooth={true} offset={-150} duration={1000} className='nav-menu-item'>About</Link>
                <Link to='skills' smooth={true} offset={-35} duration={1000} className='nav-menu-item'>Skills</Link>
                <Link to='experience' smooth={true} offset={-10} duration={1000} className='nav-menu-item'>Experience</Link>
                <Link to='projects' smooth={true} offset={0} duration={1000} className='nav-menu-item'>Projects</Link>
                <Link to='education' spy={true} smooth={true} duration={1000} className='nav-menu-item'>Education</Link>
            </div>
            <button className="contact-btn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
                }}>
                <img className='contact' src={Contact} alt="" />
                <p>Contact Me</p>
            </button>

            <img className='BurgerMenu' src={BurgerMenu} alt="Menu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="burger-menu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link to='intro' smooth={true} offset={-100} duration={1000} className='burger-menu-item' onClick={() => setShowMenu(false)}>About</Link>
                <Link to='skills' smooth={true} offset={-60} duration={1000} className='burger-menu-item' onClick={() => setShowMenu(false)}>Skills</Link>
                <Link to='experience' smooth={true} offset={-50} duration={1000} className='burger-menu-item' onClick={() => setShowMenu(false)}>Experience</Link>
                <Link to='projects' smooth={true} offset={-50} duration={1000} className='burger-menu-item' onClick={() => setShowMenu(false)}>Projects</Link>
                <Link to='education' spy={true} smooth={true} offset={-50} duration={1000} className='burger-menu-item' onClick={() => setShowMenu(false)}>Education</Link>
                <Link to='contact' spy={true} smooth={true} offset={-50} duration={1000} className='burger-menu-item' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar
