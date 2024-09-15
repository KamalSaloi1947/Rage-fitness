import React from 'react'
import check from '../../assets/Check.png'
import "./About.css";

const About = () => {
  return (
    <div className='about' id='about'>
    
      <div className="about-container">
        <div className="about-top">
          <div className="left">
            <h1>
              Get your workout gear ready
            </h1>
            <ul className='about-items'>
              <li><img src={check} alt="" />State of the art equipments</li>
              <li><img src={check} alt="" />Best Trainers out there</li>
              <li><img src={check} alt="" />Nutrition consulting</li>
              <li><img src={check} alt="" />Best location</li>
            </ul>
            <button className='about-button'>Register now</button>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="about-bottom">
          <h2>“We have the best trainers you will ever find.”</h2>
          <input type="text" placeholder='enter you mobile no' />
          <button className='about-button-down'>Register now</button>
        </div>

      </div>
    </div>
  )
}

export default About
