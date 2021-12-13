import React from 'react'
import './SkillItem.css'

function SkillItem({icon, linkTo}) {
  return (
    <div className='skill-item'>
      <a href={linkTo} target="_blank" rel="noreferrer">{icon}</a>
    </div>
  )
}

export default SkillItem;
