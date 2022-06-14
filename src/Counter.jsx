import React from "react"

/*State 01: Create a `Counter` class component with an internal state containing a `count` property, initialized to `0`.
The `Counter` component should render the `count` property within an `h1` tag, and the `count` property should be incremented by `1` every second;*/

export class Counter extends React.Component{
    state = {
        count : 0
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState({
                count : this.state.count + 1
            })
        }, 1000)
    }
    render() {
        return <>
                    <h1> {this.state.count} </h1>
               </>
    }
}