// libraries
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'

// assets
import logo from "../assets/logo.svg"
import logoDark from "../assets/logo-dark.svg"
import { links } from '../utils/constants'

// context
import { useThemeContext } from "../context/theme_context";

const Navbar = () => {
    const { theme } = useThemeContext();
    console.log(theme, "Theme context");
    console.log('navbar');

    return (
        <NavContainer>
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
                    <button type="button" className="nav-toggle">
                        <FaBars /> {/* Add openSidebar function here*/}
                    </button>
                </div>
                <ul className='nav-links'>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        console.log(id, url, text);
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}
                    {/* if the user is loggedIn render the following: */}
                    {/*  myUser: TODO: add this later */}     {false && (
                        <>
                            <li>
                                <Link to="/history">history</Link>
                            </li>
                            <li>
                                <Link to="/scan">scan</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }
    
    `;

export default Navbar