import React from 'react'
import { Age } from './Age'

/*Props-01: Create a `Welcome` class component that receives a `name` prop and renders the `Welcome {name}!` message within a `p` tag.
Render this component to you `App` component, passing it a `name` prop of your choosing.*/
export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, <strong>{this.props.name}</strong></p>
                {this.props.age > 18 && this.props.age < 65 ? <Age age={this.props.age}/> : null} 
            </>
        )
    }
}

/*Props-02: What happens if no `name` prop is passed to the `Welcome` component?
Can you set a default value for the `name` prop?
If no `name` prop is passed to the `Welcome` component, only the part of the string that I have compiled will be rendered, that is "Welcome,".
Yes, I can set a default value for the `name` prop.*/
Welcome.defaultProps = {
    name:"Aida"
}

/*Props-03: Modify the `Welcome` component so that it receives a second prop called `age` and renders it below the `welcome` message,
within a `p` tg after the message `"Your age is"`. SVOLTO ALLA RIGA 10*/

/*Props-04: What happens if the `name` prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression?
Modify the value passed to the `name` prop so that it's contained within a `strong` tag. SVOLTO ALLA RIGA 10*/

//Conditional Rendering-01: Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18`. SVOLTO ALLA RIGA 11.

//Conditional Rendering-02: Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is present. SVOLTO ALLA RIGA 11.

//Conditional Rendering-03: Modify the `Welcome` component so that the `Age` component is rendered only if the `age` prop is greater than `18` and less than `65`. SVOLTO ALLA RIGA 11.