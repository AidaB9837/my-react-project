import React from "react";

/*Events 02: Extract the button within a new component called CounterButton and render it within the
ClickCounter component. How can you pass the onClick event handler to the CounterButton component? As a Props.*/

export class CounterButton extends React.Component {
    render() {
        return <button onClick={this.props.click}>Increment</button>
    }
}