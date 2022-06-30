import React, { useState } from "react";

export function ClickCounter ({initialValue = 0}) {
    const [count, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter(count => count + 1)
    }   

    return(
        <div>
            <h1>Click Counter: {count}</h1>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
        )
    
}