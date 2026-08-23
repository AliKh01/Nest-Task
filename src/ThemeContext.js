import React, { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark')
            root.classList.add("dark");
        else
            root.classList.remove("dark");
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
