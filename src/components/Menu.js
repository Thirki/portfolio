import React from 'react'
import './Menu.css'

function Menu() {
  return (
      <nav id="menu-nav">
        <div className='menu-nav-container'>
          <div className='logo'><span>{'<'}</span>Henrique <span>{'/>'}</span></div>
          <ul>
            <li><a href="#About">Sobre mim</a></li>
            <li><a href="#Projects">Projetos</a></li>
            <li><a href="#Services">Serviços</a></li>
            <li><a href="#Skills">Skills</a></li>
          </ul>
        </div>
      </nav>
  )
}

export default Menu;
