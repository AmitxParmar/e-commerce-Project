import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

import logo from '../assets/logo.png'
import logoDark from '../assets/logo.png'
import { links } from '../utils/constants'
/* TODO: CART BUTTON COMPONENT GOES HERE */

import { useThemeContext } from '../context/theme_context'
import { useProductsContext } from '../context/products_context';

const Sidebar = () => {
    const { theme } = useThemeContext();
    const { isSidebarOpen, closeSidebar } = useProductsContext();

    return (
        <SidebarContainer>
            <aside
                className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
            >
                <div className='sidebar-header'>
                    {theme === 'light-theme' ? (
                        <Link>
                            <img src={logo} alt="logo" />
                        </Link>
                    ) : (
                        <Link>
                            <img src={logoDark} alt="logo" />
                        </Link>
                    )}
                    <button onClick={closeSidebar} className="class-btn" type="button">
                        <FaTimes />
                    </button>
                </div>
                <ul className='links'>
                    {links.map((id, text, url) => (
                        <li key={id}>
                            <Link to={url} onClick={closeSidebar}>
                                {text}
                            </Link>
                        </li>
                    ))}
                    {false &&  // TODO: add usercontext here, if available render the following:
                        <li>
                            <Link onClick={closeSidebar} to="/checkout">
                                checkout
                            </Link>
                        </li>
                    }
                </ul>
                {/* CART BUTTON GOES HERE */}
            </aside>
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    text-align: center;
    .sidebar-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    .close-btn {
        font-size: 2rem;
        background-color: transparent;
        border-color: transparent;
        color: var(--clr-primary-5);
        transition: var(--transition);
        cursor: pointer;
        color: var(--clr-red-dark)links;
        margin-top: 0.2rem;
    }
    .close-btn:hover{
        color: var(--clr-red-light);
    }
    .logo {
        justify-self: center;
        height: 45px;
    }
    .links {
        margin-bottom: 2rem;
    }
    .links a {

    }
`

export default Sidebar