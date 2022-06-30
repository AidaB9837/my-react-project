import { useCounter } from "./customHook/useCounter";

export function ClickCounter ({initialValue = 0}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return (
        <div>
            <h1>Click Counter: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}