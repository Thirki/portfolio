import React from 'react'
import { FaCode, FaRegEye } from 'react-icons/fa';
import './Project.css'

function Project({title, image, linkTo, technologies, preview}) {
  return (
    <div className='project-container'>
      <div className='project-image'>
        <img src={image} alt={title}/>
      </div>
      <a href={preview} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
      <p>{technologies}</p>
      <ul>
        <li>
          <a href={linkTo} target="_blank" rel="noreferrer">
            <p>Código<FaCode/></p>
          </a>
        </li>
        <li className={preview ? 'enable' : 'disable'}>
          <a href={preview} target="_blank" rel="noreferrer">
            <p>Preview<FaRegEye/></p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Project;
