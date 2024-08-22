import './NavbarRight.css'
import { CiSearch } from "react-icons/ci";

import React from 'react'

const NavbarRight = () => {
  return (
    <div className='navRight'>
        <input type="text" placeholder='Search' style={{position:'relative'}} />
        <CiSearch style={{position:'relative',right:'15px'
        }}  />

    </div>
  )
}

export default NavbarRight