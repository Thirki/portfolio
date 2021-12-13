import React from 'react'
import './Project.css'

function Project({title, image, linkTo, technologies}) {
  return (
    <div className='project-container'>
      <div className='project-image'>
        <img src={image} alt={title}/>
      </div>
      <a href={linkTo} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
      <p>{technologies}</p>
    </div>
  )
}

export default Project;
