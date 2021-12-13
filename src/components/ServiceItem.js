import React from 'react'
import './ServiceItem.css'

function ServiceItem({title, emote}) {
  const breakText = (string) => {
    let textArray = string.split(' ');
    let rest = textArray.filter(element => element !== textArray[0])
    return [textArray[0], rest.join(' ')];
  }

  title = breakText(title)

  return (
    <div className='service-item'>
      {emote}
      <h3>{title[0]}<br/>{title[1]}</h3>
    </div>
  )
}

export default ServiceItem
