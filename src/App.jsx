import React, { useState } from "react";
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
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { ControlledForm } from "./ControlledForm";
import { CarDetails } from "./CarDetails";
import { FilteredList } from "./FilteredList";


export function App() {
    const items = [
        {id: 1, name: 'Red'},
        {id: 2, name: 'Yellow'},
        {id: 3, name: 'Green'},
        {id: 4, name: 'Blue'}
    ]
    
    function onCounterChange(count){
        console.log(`The Counter is now: ${count}`)
    }
    
    const initialData = {
        model: "BMW X4 G02",
        year: 2021,
        color: "Black"
    }
    
    const [language, setLanguage] = useState("en")
    
    function handleLanguageChange(event) {
        setLanguage(event.target.value)
    }

        return <div>      
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={language}>
                        <DisplayLanguage />
                    </LanguageContext.Provider>
                        <Hello />
                        <Welcome name="Jacopo" age={24}/>
                        <Counter />  
                        <ClickCounter onCounterChange={onCounterChange}/>  
                        <ClickTracker />  
                        <InteractiveWelcome />   
                        <Login />  
                        <UncontrolledLogin />
                        <Colors colors={items}/>    
                        <TodoList> 
                            {(items, handleRemoveItem) =>{
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
                        </TodoList>
                        <Container title={<h1>Container</h1>}/>
                        <Sum number={[1,2,3,4,5]}/>   
                        <GithubUser username="AidaB9837"/>
                        <GithubUserList />
                        <ControlledForm />
                        <CarDetails initialData={initialData}/>
                        <FilteredList />
                </div>        
}

/*Components-08
Can you use the `Hello` component more than once in the `App` component? What happens if you do?
Yes, I can. If I do, I will see the `Hello` component as many time as I have inserted it into the `App` component.*/