import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome"
import { Container } from "./Container"

const items = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Yellow'},
    {id: 3, name: 'Green'},
    {id: 4, name: 'Blue'}
]

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
                    <Colors colors={items}/>    
                    <TodoList 
                    render={(items, handleRemoveItem) =>{
                        return (
                            <div>
                                <ul className="italic text-lg">
                                {items.map((content, index) => (
                                    <div>
                                        <li key={content + index}>{content}</li> <button className="border border-slate-300 bg-indigo-300 rounded-md text-sm" onClick={handleRemoveItem}>Remove Todo</button>
                                        
                                    </div>
                                ))}
                            </ul> 
                        </div>
                    )}}
                    ></TodoList>
                    <Container title={<h1>Container</h1>}/>
                </div>        
    }
}
/*Components-08
Can you use the `Hello` component more than once in the `App` component? What happens if you do?
Yes, I can. If I do, I will see the `Hello` component as many time as I have inserted it into the `App` component.*/