import React from 'react'
import icon from '../../assets/Text.png'
import arrow from '../../assets/arrow.png'
import review from '../../assets/review.mp4'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="review-container">
                <div className="left">
                    <h1>What Our Member Say About Us?</h1>
                    <div className="icons">
                        <img src={icon} alt="" />
                        <p>500+ satisfied members</p>
                    </div>
                </div>
                <div className="right">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium, in consequuntur nihil consequatur blanditiis nam accusantium voluptatem ullam quibusdam.</p>
                    <img src={arrow} alt="" /> */}
                    <p className='name'>penguin</p>
                    <div className="video-container">
                        <img src={arrow} alt="" />
                        <video controls src={review}></video>
                        <img src={arrow} alt="" />
                    </div>

                </div>
            </div>
            <hr />
        </div>
    )
}

export default Testimonials
