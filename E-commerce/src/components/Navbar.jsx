import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'


import { links } from '../utils/constants'
const Navbar = () => {
    return (
        <div className='nav-center'>
            <div className="nav-header">
                {theme === "light-theme" ? (
                    <Link to='/' >
                        <img src={logo} alt="nav logo" />
                    </Link>
                ) : (
                    <Link to='/'>
                        <img src={logoDark} alt="nav logo" />
                    </Link>
                )}
                <button onClick type="button" className="nav-toggle">
                    <FaBars />
                </button>
            </div>
            <ul className='nav-links'>
                { }

            </ul>

        </div>
    )
}

export default Navbar