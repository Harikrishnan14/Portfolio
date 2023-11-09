import React from 'react'
import './Main.css'
import Avatar from '../Assets/images/Avatar.png'
import Github from '../Assets/images/Github.png'
import Resume from '../Assets/images/Resume.png'
import { Link } from 'react-scroll'

const Main = () => {
  return (
    <section id='intro'>
        <div className="intro-content">
            <span className='hi'>Hi,</span>
            <span className='intro'>I am <span className='name'>Harikrishnan V B</span></span>
            <span className='webdev'>Web Developer</span>
            <p className='desc'>I'm a passionate web developer with a keen eye for design and a love for clean,<br /> efficient code. I specialize in creating user-friendly websites that make<br /> a lasting impact. Let's collaborate to bring your digital vision to life.</p>
            <div className="button">
                <Link to=''>
                    <button className='btn'>
                        <img className='btn-img' src={Resume} alt="" />
                        <p>Check Resume</p>
                    </button>
                </Link>
                <Link to=''>
                    <button className='btn'>
                        <img className='btn-img' src={Github} alt="" style={{marginRight: "5px"}}/>
                        <p>Github Profile</p>
                    </button>
                </Link>
            </div>
        </div>
        <img className='avatar' src={Avatar} alt="" />
    </section>
  )
}

export default Main
