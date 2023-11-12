import React from 'react'
import './Education.css'
import { education } from '../Assets/data/education'

const Education = () => {
    return (
        <section id='education'>
            <h2 className='education-main-title'>Education</h2>
            <p className='education-main-desc'>Throughout my studies, I have grown and learned about myself. These are<br /> the specifics of my education.</p>

            <div className="education-container">

                {education.map((education) => (
                    <div className="education" key={education.id}>
                        <div className="educationitem">

                            <div className="role">
                                {education.Institute}
                            </div>
                            <div className="company">
                                {education.program}
                            </div>
                            <div className="date">
                                {education.date}
                            </div>
                            <div className="description">
                                {education.desc}
                            </div>

                        </div>
                    </div>
                ))}

            </div>


        </section>
    )
}

export default Education
