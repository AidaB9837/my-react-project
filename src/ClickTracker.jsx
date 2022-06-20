import React from "react";

/*Events 03: Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons,
and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component.
Tip: you can use the event object to access the target property of the event. */

export class ClickTracker extends React.Component {
    state = {
        lastPressedButton: ""
    }

    trackLastButton = (event) => {
        this.setState({
            lastPressedButton: ""
        })

        this.setState((state) => ({
            lastPressedButton: state.lastPressedButton.concat(event.target.innerHTML)
        }))
    }
    render() {
        return <> 
                <h1>What was the last button pressed? {this.state.lastPressedButton}</h1>
                <button onClick={this.trackLastButton}>First</button> 
                <button onClick={this.trackLastButton}>Second</button> 
                <button onClick={this.trackLastButton}>Third</button> 
               </>
    }
}