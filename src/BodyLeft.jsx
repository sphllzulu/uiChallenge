import './BodyLeft.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import React from 'react'

const BodyLeft = () => {
  return (
    <div className='mainLeft'>
        <p style={{margin:"40px 0", padding:"0 10px",borderLeft:"2px solid lightgray",color:'lightgray'}}>SOFA <br /> Brown</p>
        <p style={{color: 'lightgray'}}>Two USB ports bring the sofa into the 21st <br /> century allowing you to easily charge your phone <br /> and tablet while you relax</p>
        <div className="buttons">
            <p className='dark-Text'>$399</p>
            <p className='light-Text'>Pay For</p>
        </div> 
      </div>
  )
}

export default BodyLeft