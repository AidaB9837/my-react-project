import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome"

//Components-03: Write a class component called App that renders the Hello component within a div tag.
export class App extends React.Component {
    render() {
        return <div>
                    <Hello />
                    <Welcome name="Jacopo" age={24}/>
                    <Counter />  
                    <ClickCounter />  
                    <ClickTracker />  
                    <InteractiveWelcome />   
                    <Login />  
                    <UncontrolledLogin />       
                </div>        
    }
}
/*Components-08
Can you use the `Hello` component more than once in the `App` component? What happens if you do?
Yes, I can. If I do, I will see the `Hello` component as many time as I have inserted it into the `App` component.*/