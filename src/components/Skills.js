import React from 'react'
import SkillItem from './SkillItem'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiGithub } from "react-icons/si";
import './Skills.css'

function Skills() {
  return (
    <section id="Skills">
     <h3>Minhas skills</h3>
     <div className='skills-container'>
      <SkillItem icon={<FaHtml5/>} linkTo="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer"/>
      <SkillItem icon={<FaCss3Alt/>} linkTo="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer"/>
      <SkillItem icon={<FaJs/>} linkTo="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer"/>
      <SkillItem icon={<FaReact/>} linkTo="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer"/>
      <SkillItem icon={<SiRedux/>} linkTo="https://redux.js.org/" target="_blank" rel="noreferrer"/>
      <SkillItem icon={<SiGithub/>} linkTo="https://github.com/" target="_blank" rel="noreferrer"/>
     </div>
    </section>
  )
}

export default Skills
