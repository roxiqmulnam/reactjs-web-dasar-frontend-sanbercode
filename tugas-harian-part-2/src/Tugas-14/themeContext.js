import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const[theme, setTheme] = useState("navbar-light")
    const handleToggle = () => {
        setTheme(theme)
    }
    return (
        <div>
            <ThemeContext.Provider value={{theme, setTheme, handleToggle}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

