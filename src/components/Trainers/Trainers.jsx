import React from 'react'
import './Trainers.css'
import trainer from '../../assets/trainer.jpg'

const Trainers = () => {
    return (
        <div className='trainers' id='trainers'>
            <div className="trainers-container">
                <h1>Meet The TRAINERS</h1>
                <div className="trainer-portfolios">
                    <div className="trainer-portfolio">
                        <img className='trainer-image' src={trainer} alt="" />
                        <h2>Trainer name</h2>
                        <h5>Trainer experience</h5>
                        <p>Speciality</p>
                    </div>
                    <div className="trainer-portfolio">
                        <img className='trainer-image' src={trainer} alt="" />
                        <h2>Trainer name</h2>
                        <h5>Trainer experience</h5>
                        <p>Speciality</p>
                    </div>
                    <div className="trainer-portfolio">
                        <img className='trainer-image' src={trainer} alt="" />
                        <h2>Trainer name</h2>
                        <h5>Trainer experience</h5>
                        <p>Speciality</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainers
