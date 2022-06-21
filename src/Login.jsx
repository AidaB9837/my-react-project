import React from "react";

/*Forms 02: Create a `Login` component containing three inputs: a `username` input, a `password` input and a `remember` checkbox.
All three inputs should be controlled components. */

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    
    render() {
        return <>
        <h1>Login Forms:</h1>
        <input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="username"
        /><br></br>
        <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="password"
        /> <br></br>
        <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.handleInputChange}
        />
        </>
    }
}