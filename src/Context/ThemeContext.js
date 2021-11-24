import React, { useState } from 'react'

// context can be used to share data among components, passing by levels can be tedious, share theme among all components instead
// Provider vs Consumer, Provider defines state for the theme
const {Provider, Consumer} = React.createContext();

// props.children allows this to be used as a container for all content inserted in props.children
// Moral of the story, context is good for sharing things among siblings and children, efficient
function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    // pass theme to child of current provider and the function to change it
    return <Provider value={{theme, toggleTheme}}>
        {props.children}
    </Provider>
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}