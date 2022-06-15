import React from "react"

/*State 01: Create a `Counter` class component with an internal state containing a `count` property, initialized to `0`.
The `Counter` component should render the `count` property within an `h1` tag, and the `count` property should be incremented by `1` every second;*/

export class Counter extends React.Component{
    state = {
        count : this.props.initialValue
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState({
                count : this.state.count + this.props.incrementAmount
            })
        }, this.props.incrementInterval)
    }
    render() {
        return <>
                    <h1> {this.state.count} </h1>
               </>
    }
}

/*State 02: When calling `setState` to increment the counter, should the parameter be a function or an object?
Why?*/

/*State 03: Modify the `Counter` component so that the initial value of the counter, the increment interval and
 the increment amount are passed as props to the component.*/

 Counter.defaultProps = {
    initialValue : 0,
    incrementInterval : 1000,
    incrementAmount : 1
 }