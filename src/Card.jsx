import './Card.css'
import { FaHeart } from "react-icons/fa";
import React from 'react'

const Card = () => {
  return (
    <div className="card">
            <img className='arrowImg' src="arrow.png" alt="" style={{width:"80px", filter:"grayscale(100%)"
            }}/>
            <img className='sofaImg' src="sofa.png" alt="" />

            <div className='specs'>
                <p className='dimensions'>2m/2.4m/2.7m/3.2m</p>
                <FaHeart />

            </div>
            
        </div>
  )
}

export default Card