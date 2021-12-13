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
          <button type='submit' className='button-cv'>Download CV</button>
          <button type='submit' className='button-contato'>Entrar em contato</button>
        </div>
      </div>
      <div className='hero-image-container'>
        <HeroImage/>
      </div>
    </section>
  )
}
