import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"

//Components-03: Write a class component called App that renders the Hello component within a div tag.
export class App extends React.Component {
    render() {
        return <div>
                    <Hello />
                    <Welcome name="Jacopo" age={24}/>
                    <Counter />  
                    <ClickCounter />                
                </div>        
    }
}
/*Components-08
Can you use the `Hello` component more than once in the `App` component? What happens if you do?
Yes, I can. If I do, I will see the `Hello` component as many time as I have inserted it into the `App` component.*/