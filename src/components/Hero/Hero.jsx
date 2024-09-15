import React from 'react'
import './Hero.css'
import gym_video from '../../assets/about.mp4'


const Hero = () => {
  return (
    <div className='hero'>
      {/* <video muted autoPlay loop src={gym_video}></video> */}
      <div className="hero-container">
        <div className="left">
            <h1>Helps for your ideal body fitness</h1>
            <p>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
            <button className='hero-button'>Start Training</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
