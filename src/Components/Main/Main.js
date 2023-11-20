import React from 'react'
import './Main.css'
import Hero from '../Assets/images/Hero-img.png'
import Github from '../Assets/images/Github.png'
import Resume from '../Assets/images/Resume.png'
import { links } from '../Assets/data/links'


const Main = () => {
  return (
    <section id='intro' className='main-section'>
            <div className="mainSection-contentbox">
                <div className="mainSection-content">
                    <div className="contents">
                        <p className='hi-content'>Hey, I'm</p>
                        <p className='name'>Harikrishnan V B</p>
                        <p className='mainSection-title'>Web Developer</p>
                    </div>
                    <p className="mainSection-description">I'm a passionate web developer with a keen eye for design and a love for clean, efficient code. I specialize in creating user-friendly websites that make a lasting impact. Let's collaborate to bring your digital vision to life.</p>
                </div>
                <div className="button">
                    <a href={links.Resume} target='__blank'>
                        <button className='btn'>
                            <img className='btn-img' src={Resume} alt="" />
                            <p>View Resume</p>
                        </button>
                    </a>
                    <a href={links.Github} target='__blank'>
                        <button className='btn2'>
                            <img className='btn-img' src={Github} alt="" style={{ marginRight: "5px" }} />
                            <p>Github Profile</p>
                        </button>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src={Hero} alt="Hero Section" />
            </div>
        </section>
  )
}

export default Main
