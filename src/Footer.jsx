import './Footer.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import React from 'react'

const Footer = () => {
  return (
    
       <div className="icons" >
        <div className="socials" >
          <div className="google">
            <FaGoogle style={{color: "lightgray"}} />
          </div>
          <div className="twitter">
            <FaTwitter />
          </div>
          <div className="facebook">
            <GrFacebookOption style={{color: "lightgray" }} />
          </div>
        </div>
        <div className="arrow">
          <div className="arrow-left">
            <IoIosArrowBack style={{ fontSize: "26px" }} />
          </div>
        </div>
      </div>
   
  )
}

export default Footer