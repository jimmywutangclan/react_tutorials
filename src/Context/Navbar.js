import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function Navbar() {
    return (
        <div>
            <ThemeContextConsumer>
                {
                    (context) => (
                        <div>
                            {context.theme}
                            <button onClick={context.toggleTheme}>Toggle</button>
                        </div>
                    )
                }
            </ThemeContextConsumer>
        </div>
    )
}
