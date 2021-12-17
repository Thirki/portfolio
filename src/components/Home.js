import React from 'react'
import HeroImage from './HeroImage'
import './Home.css'

export default function Home() {
  return (
    <section id="Home">
      <div className='information'>
        <h1>Olá, eu sou o<br/>Henrique Gomes <span>: )</span></h1>
        <p>Desenvolvedor Front-End Junior</p>
        <div className='button-container'>
            <a className='a-cv' href="https://drive.google.com/file/d/1NCYcCdgpJXHhkZgqoOrkZH90FOrFk36a/view?usp=sharing" target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a className="a-contato" href="https://www.linkedin.com/in/henriquegomesdev/" target="_blank" rel="noreferrer">
              Entrar em contato
            </a>
        </div>
      </div>
      <div className='hero-image-container'>
        <HeroImage/>
      </div>
    </section>
  )
}
