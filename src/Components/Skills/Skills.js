import React from 'react'
import './Skills.css'
import { skills } from '../Assets/data/skills'

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='skills-title'>Skills</h2>
      <p className='skills-desc'>Here are some of my skills on which i have been working on for<br />the past few years</p>
      <div className="skills-container">
        {skills.map((item, m_id) => (
          <div className='skill' key={m_id}>
            <h2 className='skills-item-title'>{item.title}</h2>
            <div className="skill-list">
              {item.skills.map((skill, id) => (
                <div className="skill-item" key={id}>
                  <img className='skill-img' src={skill.image} alt="" />
                  <div className="skillname">
                    {skill.name}
                  </div>
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
