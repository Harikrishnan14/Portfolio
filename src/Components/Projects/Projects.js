import React, { useState } from 'react'
import './Projects.css'
import { projects } from '../Assets/data/projects'

const Projects = () => {

  const [toggle, setToggle] = useState('all');

  return (
    <section id='projects'>
      <h2 className='projects-main-title'>Projects</h2>
      <p className='projects-main-desc'>I have worked on a wide range of projects, From web apps to android apps.<br /> Here are some of my projects</p>

      <div className='category'>
        <div className="button-group">

          {toggle === 'all' ?
            <button style={{ background: "yellow", color: "black" }} value="all" onClick={() => setToggle('all')} className='all toggle-button'>All</button> :
            <button value="all" onClick={() => setToggle('all')} className='all toggle-button'>All</button>
          }

          {toggle === 'web app' ?
            <button style={{ background: "yellow", color: "black" }} value="web app" onClick={() => setToggle('web app')} className='toggle-button'>Web Apps</button> :
            <button value="web app" onClick={() => setToggle('web app')} className='toggle-button'>Web Apps</button>
          }

          {toggle === 'android app' ?
            <button style={{ background: "yellow", color: "black" }} value="android app" onClick={() => setToggle('android app')} className='toggle-button'>Android Apps</button> :
            <button value="android app" onClick={() => setToggle('android app')} className='toggle-button'>Android Apps</button>
          }

          {toggle === 'machine learning' ?
            <button style={{ background: "yellow", color: "black" }} value="machine learning" onClick={() => setToggle('machine learning')} className='ml toggle-button'>Machine Learning</button> :
            <button value="machine learning" onClick={() => setToggle('machine learning')} className='ml toggle-button'>Machine Learning</button>
          }
        </div>
      </div>

      <div className='category-res'>
        <div className="button-group">

          {toggle === 'all' ?
            <button style={{ background: "yellow", color: "black" }} value="all" onClick={() => setToggle('all')} className='all toggle-button'>All</button> :
            <button value="all" onClick={() => setToggle('all')} className='all toggle-button'>All</button>
          }

          {toggle === 'web app' ?
            <button style={{ background: "yellow", color: "black" }} value="web app" onClick={() => setToggle('web app')} className='toggle-button'>Web</button> :
            <button value="web app" onClick={() => setToggle('web app')} className='toggle-button'>Web</button>
          }

          {toggle === 'android app' ?
            <button style={{ background: "yellow", color: "black" }} value="android app" onClick={() => setToggle('android app')} className='toggle-button'>Android</button> :
            <button value="android app" onClick={() => setToggle('android app')} className='toggle-button'>Android</button>
          }

          {toggle === 'machine learning' ?
            <button style={{ background: "yellow", color: "black" }} value="machine learning" onClick={() => setToggle('machine learning')} className='ml toggle-button'>ML</button> :
            <button value="machine learning" onClick={() => setToggle('machine learning')} className='ml toggle-button'>ML</button>
          }
        </div>
      </div>

      <div className="projects-container">

        {toggle === "all" && projects.map((project, id) => (
          <div key={id} className="projects">
            <div className="img">
              <img className='projects-img' src={project.image} alt="" />
            </div>

            <div className="project-details">
              <div className="project-title">
                {project.title}
              </div>
              <div className="project-desc">
                {project.description}
              </div>
            </div>

            <div className="github-link">
              <a href={project.github} target='__blank' className='project-github-link'>View in Github &#8599;</a>
            </div>

          </div>
        ))}

        {projects
          .filter((item) => item.category === toggle)
          .map((project) => (
            <div key={project.id} className="projects">
              <div className="img">
                <img className='projects-img' src={project.image} alt="" />
              </div>

              <div className="project-details">
                <div className="project-title">
                  {project.title}
                </div>
                <div className="project-desc">
                  {project.description}
                </div>
              </div>

              <div className="github-link">
                <a href={project.github} target='__blank' className='project-github-link'>View in Github &#8599;</a>
              </div>

            </div>
          ))}

      </div>

    </section>
  )
}

export default Projects
