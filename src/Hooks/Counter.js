import React, { useState } from 'react'

export default function Counter() {
    // use array deconstruction, one is the variable and the second is the function that modifies the variable
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }

    const [previousClicks, setPreviousClicks] = useState(0);
    const inputChange = (event) => {
        setPreviousClicks(Number(event.target.value));
    }

    return (
        <div>
            <label>
                Previous clicks:
                <input type="text" value={previousClicks} onChange={inputChange} />
            </label>
            <p>Counter: {previousClicks + count}</p>
            <button onClick={increase}>Button</button>
        </div>
    )
}
