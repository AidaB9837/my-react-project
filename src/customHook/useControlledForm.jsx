import { useState } from "react";

/*Custom Hooks 02: Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, 
and returns the current value of the inputs as well as an event handler to update either input.*/

export function useControlledForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsernameChange(event) { 
        setUsername((username) => username = event.target.value)
    }

    function handlePasswordChange(event){
        setPassword((password) => password = event.target.value)
    }
    const data = {username, password}

    console.log(JSON.parse(JSON.stringify(data)))


    return {
        username: username,
        password: password,
        onUsernameChange: handleUsernameChange,
        onPasswordChange: handlePasswordChange
    }

}