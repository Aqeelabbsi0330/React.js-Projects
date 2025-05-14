import React from 'react'
import './Hero.css'
import Dark_Arrow from '../../assets/images/dark-arrow.png'
export default function Hero() {
  return (
    <div className='hero ' id='hero'>
      <div className="hero_text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge,
             skills, and experiences needed to excel in the dynamic field of education</p>
            <button className="btn">Explore more <img src={Dark_Arrow} alt="" /></button>
      </div>
    </div>
  )
}
