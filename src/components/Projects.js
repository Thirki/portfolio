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
          preview="https://mystifying-chandrasekhar-fa4b44.netlify.app/"
        />
        <Project
          title="Product-List"
          image="https://user-images.githubusercontent.com/69635807/146056369-942aa248-5212-443e-a7ce-cebe61eeaa92.png"
          linkTo=""
          technologies="React"
          preview="https://dazzling-easley-4f7da5.netlify.app/"
        />
        <Project
          title="DevFinder"
          image="https://repository-images.githubusercontent.com/359263816/763c0a80-a07b-11eb-8c1e-753efb2f253a"
          linkTo=""
          technologies="Next.js, React, TypeScript"
        />
        <Project
          title="Filmaria"
          image="https://user-images.githubusercontent.com/69635807/146081602-8cde935e-f23b-4dfc-a122-820824e53d12.png"
          linkTo="https://github.com/Thirki/react-native-filmaria"
          technologies="React, React Router"
        />
        <Project
          title="Order Summary"
          image="https://user-images.githubusercontent.com/69635807/146107520-6a2faa8d-af5c-4f3b-bc2a-15df28d36619.png"
          linkTo="https://github.com/Thirki/CSS-Order-summary-card"
          technologies="HTML, CSS"
        />
        <Project
          title="FAQ-accordion-card"
          image="https://raw.githubusercontent.com/Thirki/FrontendMentor-FAQ-accordion-card/main/design/desktop-preview.jpg"
          linkTo=""
          technologies="HTML, CSS, JavaScript"
        />
      </div>
    </section>
  )
}

export default Projects;
