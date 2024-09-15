import React from 'react'
import './Reason.css'
import muscle from '../../assets/Vector.png'

const Reason = () => {
    return (
        <div className='Reason-section '>
            <div className="reasons-container">
                <div className="left">
                </div>
                <div className="right">
                    <h1>Why Choose Us ?</h1>
                    <div className="reasons">
                        <div className="reason">
                            <img src={muscle} alt="" />
                            <h2>Muscle Gain</h2>
                            <p>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
                            <a href="">Start Training</a>
                        </div>
                        <div className="reason">
                            <img src={muscle} alt="" />
                            <h2>Muscle Gain</h2>
                            <p>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
                            <a href="">Start Training</a>
                        </div>
                        <div className="reason">
                            <img src={muscle} alt="" />
                            <h2>Muscle Gain</h2>
                            <p>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
                            <a href="">Start Training</a>
                        </div>
                        <div className="reason">
                            <img src={muscle} alt="" />
                            <h2>Muscle Gain</h2>
                            <p>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
                            <a href="">Start Training</a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Reason
