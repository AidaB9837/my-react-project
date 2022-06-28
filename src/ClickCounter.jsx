import { useCounter } from "./customHook/useCounter";

export function ClickCounter ({initialValue = 0}) {
    const {counter, onIncrement} = useCounter(initialValue)

    return (
        <div>
            <h1>Click Counter: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}