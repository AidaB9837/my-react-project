import { useState } from "react"

/*Custom Hooks 01: Create a custom hook useCounter that keeps track of the state of a counter, 
and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.*/

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement() {
        setCounter((c) => c - 1)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}