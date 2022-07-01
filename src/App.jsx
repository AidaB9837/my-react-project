import React from "react";
import { Welcome } from "./Welcome"
import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter"
import { ShowGithubUser } from "./ShowGithubUser"
import { GithubUserList } from "./GithubUserList"

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
            <>
{/* React Router 04: Add three Links within the main App component and use them to navigate to all three routes. */}
            <div>
                <h1>Links to Navigate:</h1>
                <Link to="/">Homepage</Link> | <Link to="/counter">Counter</Link> | <Link to="/userslist">Github User</Link><hr></hr>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Jacopo"/>} />
                <Route path="/counter" element={<ClickCounter />} />

{/* React Router 06: Add a Route to the users path that shows the GihubUserList component from useEffect 04. 
Modify it so that instead of showing the GithubUser component for each username entered, 
it shows a link to a nested route that shows the ShowGithubUser component. 
In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route. */}
                <Route path="/userslist" element={<GithubUserList />}>
                    <Route path="users/:username" element={<ShowGithubUser />} />
                </Route>      

{/* React Router 05: Add a Not Found route that renders when a user navigates to a path that does not exist. */}
                <Route path="*" element={<p>Page Not Found</p>} />
            </Routes>
            </>
        )
}
