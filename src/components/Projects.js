import React from 'react'
import Project from './Project';
import './Projects.css'

function Projects() {
  return (
    <section id="Projects">
      <h2>Projetos</h2>
      <div className='project-list'>
        <Project
          title="DevFinder"
          image="https://user-images.githubusercontent.com/69635807/144933921-fbcba9aa-280a-4fe4-8b2d-84907478780f.png"
          linkTo="https://github.com/Thirki/github-user-search-app"
          technologies="React Class, Redux Class"
        />
        <Project
          title="DevFinder"
          image="https://user-images.githubusercontent.com/69635807/144933921-fbcba9aa-280a-4fe4-8b2d-84907478780f.png"
          linkTo=""
          technologies="React Class, Redux Class"
        />
        <Project
          title="DevFinder"
          image="https://user-images.githubusercontent.com/69635807/144933921-fbcba9aa-280a-4fe4-8b2d-84907478780f.png"
          linkTo=""
          technologies="React Class, Redux Class"
        />
        <Project
          title="DevFinder"
          image="https://user-images.githubusercontent.com/69635807/144933921-fbcba9aa-280a-4fe4-8b2d-84907478780f.png"
          linkTo=""
          technologies="React Class, Redux Class"
        />
        <Project
          title="DevFinder"
          image="https://user-images.githubusercontent.com/69635807/144933921-fbcba9aa-280a-4fe4-8b2d-84907478780f.png"
          linkTo=""
          technologies="React Class, Redux Class"
        />
        <Project
          title="DevFinder"
          image="https://user-images.githubusercontent.com/69635807/144933921-fbcba9aa-280a-4fe4-8b2d-84907478780f.png"
          linkTo=""
          technologies="React Class, Redux Class"
        />
      </div>
    </section>
  )
}

export default Projects;
