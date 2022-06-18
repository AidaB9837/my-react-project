import React from "react"
import { CounterDisplay } from "./CounterDisplay"

/*State 01: Create a `Counter` class component with an internal state containing a `count` property, initialized to `0`.
The `Counter` component should render the `count` property within an `h1` tag, and the `count` property should be incremented by `1` every second;*/

export class Counter extends React.Component{
// Start Mounting Phase
/*Component Lifecycle 01: Modify the `Counter` component so that the interval is initialized 
 within the `componentDidMount` life cycle method instead of the constructor. Is the constructor still required? No*/
    state = {
        count: this.props.initialValue
    }

    componentDidMount() {
        this._interval = setInterval(() => {
        this.setState({
            count : this.state.count + this.props.incrementAmount
        })
        }, this.props.incrementInterval)
    }
/*Component Lifecycle 02: Modify the `Counter` component so that the interval is cleared whenever the compnent is
unmounted. What lifecycle method should you use? `componentWillUnmount`*/
    componentWillUnmount() {
        if (this._interval){
            clearInterval(this._interval)
        }
    }
/*Component Lifecycle 03: Reset the counter to the initial value received as a prop when the value is greater than ten
times that initial value. Do so in the `componentDidUpdate` lifecycle method.*/
    componentDidUpdate(prevProps) {
        if (this.state.count > this.props.initialValue*10) {
            this.setState({count: prevProps.initialValue})
        }
    }

    render() {
        return <>
                    <CounterDisplay count={this.state.count}/>
               </>
    }
}

/*State 02: When calling `setState` to increment the counter, should the parameter be a function or an object?
Why?*/

/*State 03: Modify the `Counter` component so that the initial value of the counter, the increment interval and
 the increment amount are passed as props to the component.*/

 Counter.defaultProps = {
    initialValue : 1,
    incrementInterval : 1000,
    incrementAmount : 1
 }

 /*State 05:Reset the counter to the initial value received as a prop when the value is greater than ten times
 that initial value.*/

