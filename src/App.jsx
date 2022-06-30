import React from "react";
import { Welcome } from "./Welcome"
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter"
import { ShowGithubUser } from "./ShowGithubUser"

/*React Router 01: Create an App component that wraps a Routes component and add a single Route to the / path 
that renders the Welcome component from Function Components 01, passing it a name prop.
Render the App component within a BrowserRouter component. */

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
/*React Router 02: Add a new Route to the /counter path that renders the Counter component from useState 01.*/
        return (
            <Routes>
                <Route path="/" element={<Welcome name="Jacopo"/>} />
                <Route path="/counter" element={<ClickCounter />} />
                <Route path="/users">
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
            </Routes>
        )
}