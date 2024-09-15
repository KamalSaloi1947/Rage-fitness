import React from 'react'
import './Contact.css'
import logo from '../../assets/Left.png'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'
import twitter from '../../assets/twitter.svg'



const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-container">
        <div className="left">
            <img src={logo} alt="" />
            <p>Highlight benefits of each exercise, both physical and mental</p>
        </div>
        <div className="right">
            <div className="pag1">
                <h2>Sitemap</h2>
                <ul>
                    <li>About us</li>
                    <li>Promos</li>
                    <li>News & blog</li>
                    <li>Help centre</li>
                </ul>
            </div>
            <div className="pag2">
                <h2>Supprt</h2>
                <ul>
                    <li>Faq</li>
                    <li>Support center</li>
                </ul>
            </div>
            <div className="pag3">
                <h2>social links</h2>
                <div className="icons">
                    <img src={insta} alt="" className="1" />
                    <img src={fb} alt="" className="2" />
                    <img src={twitter} alt="" className="3" />
                </div>
            </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Contact
