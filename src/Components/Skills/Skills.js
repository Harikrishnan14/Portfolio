import React from 'react'
import './Skills.css'
import { skills } from '../../Data/Constants'

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='skills-title'>Skills</h2>
      <p className='skills-desc'>Here are some of my skills on which i have been working on for the past 2 years</p>
      <div className="skills-container">
        {skills.map((item) => (
          <div className='skill'>
            <h2 className='skills-item-title'>{item.title}</h2>
            <div className="skill-list">
              {item.skills.map( (skill) => (
                <div className="skill-item">
                  <img className='skill-img' src={skill.image} alt="" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
      
    </section>
  )
}

export default Skills
