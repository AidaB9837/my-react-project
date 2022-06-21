import React from "react";

/*Forms 05: Implement an UncontrolledLogin component that implements all the operations of the Login component,
but does so using uncontrolled components. */

export class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }
    render() {
        return <>
        <h1>Uncontrolled Login</h1>
        <form onSubmit={this.handleFormSubmit}>
            <input name="username" placeholder="username"/> <br></br>
            <input name="password" type="password" placeholder="password"/><br></br>
            <input name="remember" type="checkbox"/><br></br>

            <button type="submit">Login</button>
        </form>
        </>
    }
}