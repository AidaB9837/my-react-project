import React, { useState } from "react";

// /*Forms 02: Create a `Login` component containing three inputs: a `username` input, a `password` input and a `remember` checkbox.
// All three inputs should be controlled components. */

// export class Login extends React.Component {
//     state = {
//         username: "",
//         password: "",
//         remember: false,
//         disabled: true
//     }

//     handleInputChange = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         const type = event.target.type
//         const checked = event.target.checked
//         const username = this.state.username
//         const password = this.state.password

//         this.setState({
//             [name]: type === "checkbox" ? checked : value
//         })

//         this.setState({
//             disabled: (username === "") && (password === "") ? true : false
//         })
//     }
//     onLogin = () => {
//         console.log(this.state)
//     }

//     handleResetState =() => {
//         this.setState({
//             username: "",
//             password: "",
//             remember: false
//         })
//     }

//     render() {
// /*Styling Components 03: Modify the `Login` component from 8.3 so that the "login" `button` background color is "red" when the inputted 
// password's length is shorter than 8 characters, green otherwise.*/
//         const PasswordLength = this.state.password.length
//         const LoginButtonStyle = {
//             backgroundColor: PasswordLength < 8 ? "red" : "green",
//             color: PasswordLength < 8 ? "white" : "black"
//         }

//         return <>
//         <h1>Login Forms:</h1>
// {/* Forms 04: Add a "reset" `button` to the `Login` component that clears the content of all three inputs when clicked. */}
//         <div>
//             <button 
//             onClick={this.handleResetState}>
//             Reset</button>

        
// {/* Forms 03: Add a "login" `button` to the `Login` component. This button should be disabled as long as the `username` and `password` inputs
// are empty. When clicked, the event handler attached to the button should call an `onLogin` function passed as a prop 
// to the `Login` component, passing it the state.         */}
        
//             <button 
//             style={LoginButtonStyle}
//             type="submit"
//             disabled={this.state.disabled}
//             onClick={this.onLogin}
//             >Login</button>
//         </div>
//         <div>
//             <input
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleInputChange}
//                 placeholder="username"
//                 required
//             /><br></br>
//             <input
//                 name="password"
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 placeholder="password"
//                 required
//             /> <br></br>
//             <p>Remember data?<input
//                 name="remember"
//                 type="checkbox"
//                 checked={this.state.remember}
//                 onChange={this.handleInputChange}
//             />
//             </p>
//             </div>
//         </>
//     }
// }


/*useState 02: Rewrite the `Login` component from Forms 03 as a function component, and use the `useState` hook to track the state of the `username`, `password` and `remember` inputs.
Tip: you can use `useState` more than once. */

export function Login () {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const {name, value, type, checked} = event.target

        setData((data)=> {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
    })
    }
    console.log(data)
    return (
        <>
        <h1>Login Form:</h1>
        <form>
            <input onChange={handleInputChange} value={data.username} name="username" placeholder="username" />
            <input onChange={handleInputChange} value={data.password} type="password" name="password" placeholder="password" />
            <input onChange={handleInputChange} checked={data.remember} type="checkbox" name="remember" />
        </form>
        </>
    )
}