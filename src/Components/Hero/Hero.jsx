import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Explore</h2>
        <div>
            <div className="hero-hand-icon">
                <p>vide varities</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>of plants</p>
            <p>online</p>
        </div>
  
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
