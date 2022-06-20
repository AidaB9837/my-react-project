import React from "react";
import { CounterButton } from "./CounterButton";


/*Events 01: Create a ClickCounter class component that increments a counter every time a user clicks on a button.
Render both the current value of the counter and the button within the ClickCounter component. */

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }

    render() {
        return <>
                <h1>Click Counter: {this.state.count}</h1>
                <CounterButton click={this.handleCounterIncrement}/>
              </>
    }
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}