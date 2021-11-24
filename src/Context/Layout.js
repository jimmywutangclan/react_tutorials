import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'


// the context consumer fetches the data within the context provider for this app, and sends it over
export default function Layout(props) {
    return (
        <div>
            <ThemeContextConsumer>
                {
                    (context) => (
                        <div>
                            {context.theme}
                            <button onClick={context.toggleTheme}>Toggle</button>
                            {props.children}
                        </div>
                    )
                }
            </ThemeContextConsumer>
        </div>
    )
}
