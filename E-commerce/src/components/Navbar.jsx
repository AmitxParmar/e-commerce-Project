// libraries
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'

// assets
import logo from "../assets/logo.png"
//import logoDark from "../assets/logo-dark.svg"
import { links } from '../utils/constants'
import CartButtons from './CartButtons'

// context
import { useThemeContext } from "../context/theme_context";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
    const { theme } = useThemeContext();

    const { openSidebar } = useProductsContext();
    const { isAuthenticated } = useUserContext();

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
                            <img src={logo} alt="nav logo" />
                        </Link>
                    )}
                    <button type="button" onClick={openSidebar} className="nav-toggle">
                        <FaBars /> {/* Add openSidebar function here*/}
                    </button>
                </div>
                <ul className='nav-links'>
                    {links.map(({ id, url, text }) => {
                        console.log(id, url, text);
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}
                    {isAuthenticated && (
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
                <CartButtons />
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
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 175px;
            margin-left: -15px;
        }
    }

    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
            font-size: 2rem;
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }
@media (min-width: 992px) {
    .nav-toggle {
        display: none;
    } 
    .nav-center {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
    }
    .nav-links {
        display: flex;
        justify-content:center;
        li {
            margin: 0 0.5rem;
        }
        a {
            color: var(--clr-grey-3);
            font-size: 1rem;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            padding: 0.5rem;
            &:hover {
                border-bottom: 2px solid var(--clr-primary-7);
            }
        }
    }
    .cart-btn-wrapper {
        display: grid;
    }
}
`;

export default Navbar