import React from 'react'
import aOutline from '../assets/altucher_outline.png'

function Navbar() {
    return(
        <nav className="nav">
            <img src={aOutline} alt="" className="nav__img"/>
            <h2 className="nav__title">Ten Ideas Per Day</h2>
        </nav>
    )
}

export default Navbar
