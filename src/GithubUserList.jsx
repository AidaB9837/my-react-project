/*useEffect 04: Create a GithubUserList component that maintains an array of usernames, 
showing a GithubUser component for each username entered. 
The usernames should be added to the array using an input field and a button. */

import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [newUser, setNewUser] = useState([])
    const [usernames, setUsernames] = useState(['SabinoRotondi', 'RavaMarghe', 'Matstraz'])

    function handleInputUsername(event){
        setNewUser(event.target.value)
    }

    function handleAddUsername(){
        setUsernames((usernames) => usernames.concat(newUser))
    }

    return <>
                <h1>Github Users List:</h1>
                <ul>
                    {usernames.map((name, index) =>
                    <li key={name + index}>
                        <GithubUser username={name}/>
                    </li>)}
                </ul>
                <input
                type="text"
                placeholder="Write here Github User"
                value={newUser}
                onChange={handleInputUsername}></input>
                <button onClick={handleAddUsername}>Add New User</button>
    </>
}