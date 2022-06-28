import React, { useEffect, useState } from "react";
// import { CounterButton } from "./CounterButton";


/*Events 01: Create a ClickCounter class component that increments a counter every time a user clicks on a button.
Render both the current value of the counter and the button within the ClickCounter component. */

// export class ClickCounter extends React.Component {
//     state = {
//         count: this.props.initialValue
//     }

//     handleCounterIncrement = () => {
//         this.setState(state => {
//             return {
//                 count: state.count + this.props.incrementBy
//             }
//         })
//     }

//     render() {
//         return <>
//                 <h1>Click Counter: {this.state.count}</h1>
//                 <CounterButton click={this.handleCounterIncrement}/>
//               </>
//     }
// }

// ClickCounter.defaultProps = {
//     initialValue: 0,
//     incrementBy: 1
// }


/*useState 01: Rewrite the `Counter` component from Events 01 as a function component, 
and use the `useState` hook to track the state of the counter. */

export function ClickCounter (props) {
    const [count, setCounter] = useState(props.initialValue)
    
/*useEffect 01: Add a side effect to the `ClickCounter` component from useState 01 that calls a `onCounterChange` function 
with the current value of the counter every time value of the counter changes. The function should be received as a prop. */
    useEffect(() => {
        props.onCounterChange(count)
    }, [count, props])
    

    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }

    return(
        <div>
            <h1>Click Counter: {count}</h1>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}