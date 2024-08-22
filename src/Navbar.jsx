import './Navbar.css'
import { RiCapsuleLine } from "react-icons/ri";

import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <RiCapsuleLine style={{fontSize:'30px'}} />
        <div>CAPSULE</div>
        <div>SOFA</div>
        <div>TABLE</div>
        <div>CHAIR</div>
    </div>
  )
}

export default Navbar