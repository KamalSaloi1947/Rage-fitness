import React from 'react'
import checklist from '../../assets/white-checklist.png'
import './Pricing.css'

const Pricing = () => {
  return (
    <div className='pricing' id='pricing'>
        <div className="pricing-container">
            <h1>Our List Packages</h1>
            <div className="plans">
                <div className="plan">
                    <p className='package-name'>Basic Package</p>
                    <h1>Rs. 25</h1>
                    <p className='plan-period'>per month,bill annualy</p>
                    <div className="features">
                        <ul>
                            <li><img src={checklist} alt="" />Unlimited Gym Access</li>
                            <li><img src={checklist} alt="" />2x Fitness Consultant</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            
                        </ul>
                    </div>
                    <button className='about-button'>Register now</button>
                </div>
                <div className="plan">
                    <p className='package-name'>Basic Package</p>
                    <h1>Rs. 25</h1>
                    <p className='plan-period'>per month,bill annualy</p>
                    <div className="features">
                        <ul>
                            <li><img src={checklist} alt="" />Unlimited Gym Access</li>
                            <li><img src={checklist} alt="" />2x Fitness Consultant</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            
                            
                        </ul>
                    </div>
                    <button className='about-button'>Register now</button>
                </div>
                <div className="plan">
                    <p className='package-name'>Basic Package</p>
                    <h1>Rs. 25</h1>
                    <p className='plan-period'>per month,bill annualy</p>
                    <div className="features">
                        <ul>
                            <li><img src={checklist} alt="" />Unlimited Gym Access</li>
                            <li><img src={checklist} alt="" />2x Fitness Consultant</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            <li><img src={checklist} alt="" />Personal Trainer</li>
                            
                            
                        </ul>
                    </div>
                    <button className='pricing-button'>Register now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
