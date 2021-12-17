import React from 'react'
import './Social.css'
import SocialItem from './SocialItem';
import { FaRegSmile, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Social() {
  return (
    <div id="social">
      <ul>
        <li>
          <SocialItem 
          title="Quem sou" 
          description="Cicero Henrique Gomes" 
          emote={<FaRegSmile/>}
          linkTo="https://media-exp1.licdn.com/dms/image/D4E35AQERh483FTvLMg/profile-framedphoto-shrink_200_200/0/1638292774862?e=1639854000&v=beta&t=9UkP6M1X9tS-F8YNPrOQmDX7o5RaONmZWQX6OxCdXaQ"
          />
        </li>
        <li>
          <SocialItem
            title="GitHub"
            description="Thirki"
            emote={<FaGithub/>}
            linkTo="https://github.com/thirki"
          />
        </li>
        <li>
          <SocialItem
            title="Linkedin"
            description="henriquegomesdev"
            emote={<FaLinkedinIn/>}
            linkTo="https://www.linkedin.com/in/henriquegomesdev/"
            />
        </li>
        <li>
          <SocialItem
            title="Whatsapp"
            description="+55 (11) 95878-9638"
            emote={<FaWhatsapp/>}
            linkTo="https://wa.me/5511958789638"
          />
        </li>
      </ul>
    </div>
  )
}

export default Social;