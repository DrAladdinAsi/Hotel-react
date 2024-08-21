import './navbar.scss'
import { Link } from "react-router-dom";

import React, { useState } from 'react'

function Navbar() {
    const user = true;
    const [openNavIcon , setOpenNavIcon ] = useState(false)
  return (
    <nav>
        <div className="left">
            <a href="/" className='logo'>
                <img src="/images/logo.png" alt="the logo image" />
                <span>ASSI</span>
            </a>
        </div>
        <div className="right">

       {
            user ? (<div className='userProfile'>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="the photo of the user" />
                    <span>Johne Doe</span>
                </div>)
                :(
                <>
                </>)
            }



        </div>
    </nav>
  )
}

export default Navbar