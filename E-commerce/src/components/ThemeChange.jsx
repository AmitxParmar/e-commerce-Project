import React from 'react'

import { useThemeContext } from '../context/theme_context';

const ThemeChange = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <div
            style={{
                textAlign: 'center',
                alignitems: 'center',
                alignContent: 'center',
                margin: '50px 0',
            }}
        >
            <h4>Toggle Theme</h4>
            <span>
                <button className='btn' onClick={toggleTheme}>
                    {theme === 'light-theme' ? "dark" : "light"}
                </button>
            </span>
        </div>
    )
}

export default ThemeChange