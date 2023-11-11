import React from 'react'
import './Experience.css'
import { experience } from '../Assets/data/experience'

const Experience = () => {
    return (
        <section id='experience'>
            <h2 className='experience-main-title'>Experience</h2>
            <p className='experience-main-desc'>My work experience as a software engineer working on <br /> different companies.</p>

            <div className="TimeLine-container">

                {experience.map((experience) => (
                    <div className="TimeLine" key={experience.id}>
                        <div className="TimeLineItem">

                            <div className="role">
                                {experience.role}
                            </div>
                            <div className="company">
                                {experience.company}
                            </div>
                            <div className="date">
                                {experience.date}
                            </div>
                            <div className="description">
                                {experience.desc} <br />
                            </div>

                            <div className="tags">
                                {experience.tags.map((tag) => (
                                    <div className="tag">
                                        {tag}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Experience
