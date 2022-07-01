import React from "react";
import { Welcome } from "./Welcome"
import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter"
import { ShowGithubUser } from "./ShowGithubUser"
import { GithubUserList } from "./GithubUserList"
import { GithubUser } from "./GithubUser";

export function App() {
    // const items = [
    //     {id: 1, name: 'Red'},
    //     {id: 2, name: 'Yellow'},
    //     {id: 3, name: 'Green'},
    //     {id: 4, name: 'Blue'}
    // ]
    
    // function onCounterChange(count){
    //     console.log(`The Counter is now: ${count}`)
    // }
    
    // const initialData = {
    //     model: "BMW X4 G02",
    //     year: 2021,
    //     color: "Black"
    // }
    
    // const [language, setLanguage] = useState("en")
    
    // function handleLanguageChange(event) {
    //     setLanguage(event.target.value)
    // }

        return (
            <>
            <div>
                <h1>Links to Navigate:</h1>
                <Link to="/">Homepage</Link> | <Link to="/counter">Counter</Link> | 
                <Link to="/userslist">Github User List</Link> | <Link to="githubuser">Github User</Link><hr></hr>
                
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Jacopo"/>} />
                <Route path="/counter" element={<ClickCounter />} />
                <Route path="/userslist" element={<GithubUserList />}>
                    <Route index element={<h1>Add new Github User & select it</h1>} />
                    <Route path="users/:username" element={<ShowGithubUser />} />
                </Route>
                <Route path="githubuser" element={<GithubUser username={null}/>} />      
                <Route path="*" element={<p>Page Not Found</p>} />
            </Routes>
            </>
        )
}
