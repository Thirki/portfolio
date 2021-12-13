import React from 'react'
import ServiceItem from './ServiceItem';
import { FaCode, FaMobileAlt, FaFigma } from 'react-icons/fa';
import './Services.css'

function Services() {
  return (
    <section id="Services">
      <h3>Serviços</h3>
      <div id="Service-container">
        <ServiceItem title="Criação de sites" emote={<FaCode/>}/>
        <ServiceItem title="UI Designer" emote={<FaFigma/>}/>
        <ServiceItem title="Sites responsivos" emote={<FaMobileAlt/>}/>
      </div>
    </section>
  )
}


export default Services;