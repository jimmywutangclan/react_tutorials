import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function Article(props) {
    return (
        <div>
            <ThemeContextConsumer>
                {
                    (context) => (
                        <div>
                            <h1>Welcome to the story of {props.title}. You are reading in {context.theme} mode </h1>
                            <p>{props.content}</p>
                        </div>
                    )
                }
            </ThemeContextConsumer>
        </div>
    )
}
