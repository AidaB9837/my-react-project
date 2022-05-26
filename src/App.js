import React from "react";
import { HelloWorld } from "./HelloWorld";

//Components-03: Write a class component called App that renders the Hello component within a div tag.
export class App extends React.Component {
    render() {
        return <div>
                    <h1> <HelloWorld /> </h1>
                </div>        
    }
}