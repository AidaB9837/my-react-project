import React from "react";

/*Lists 03: Create a `TodoList` component that renders a `ul` tag with a `li` tag for each item contained in the `items` _state variable_. 
The `items` state variable should be an array of strings. The `TodoList` component should also contain an `input` tag and a `button`. 
When the `button` is clicked, the event handler should add the value of the `input` tag to the `items` array. */

export class TodoList extends React.Component {
    
    state = {
        items: ['Eat','Code','Love','Sleep'],
        content: ""
    }

    handleInputChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleAddNewItem = (event) => {
        this.setState({
            items: this.state.items.concat(this.state.content)
        })
        this.setState({content: ""})
        
    }

    handleClearList = (event) => {
        this.setState({
            items: [],
            content: ""
        })
    }
    
    handleRemoveItem = (event) => {
        const removeItem = event.target.previousSibling.textContent
        this.setState((state) => ({
            items: this.state.items.filter((item) => item !== removeItem)
        }))
        console.log(event.target)
    }

    render() {
        return <>
                <h1>Todo List:</h1>
                <ul>
                    {this.state.items.map((content, index) => <li key={content + index}>{content} <button onClick={this.handleRemoveItem}>Remove Todo</button> </li>)}
                </ul>
                <div>
                    <input type="text"
                    value={this.state.content}
                    onChange={this.handleInputChange}>
                    </input>
                    <button onClick={this.handleAddNewItem}>Add</button>
{/* Lists 05: Modify the `TodoList` by adding a "reset" `button` that clears the `items` array when clicked */}
                    <button onClick={this.handleClearList}>Reset</button>
                </div>
               </>
    }
}

/*Lists 04: Modify the `TodoList` component so that the input clears very time a Todo is added to the `items` array.(?????)*/
/*Lists 06: Modify the `TodoList` by adding a "remove" `button` to each `li` tag. When clicked, the event handler should remove
corresponding item from the `items` array. Da 35-39, ma non mi convince.*/