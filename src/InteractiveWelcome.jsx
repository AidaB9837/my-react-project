import React from "react";
import { Welcome } from "./Welcome";

/*Forms 01: Create an `InteractiveWelcome` component that renders an `input` tag and the `Welcome` component.
Pass the current content of the `input` tag to the `name` prop of the `Welcome` component.
The `input` tag should be a controlled component. */

export class InteractiveWelcome extends React.Component {
    state = {
        name: ""
    }

    handleInputChange = (event) => {
        const value = event.target.value

        this.setState({
            name: value
        })
    }
    render() {
        return <>
        <h1>First Form:</h1>
        <input 
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Write your username"
            />
        <Welcome name={this.state.name}/>
        </>
    }
}