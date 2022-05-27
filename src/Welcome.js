import React from 'react'

/*Props-01: Create a `Welcome` class component that receives a `name` prop and renders the `Welcome {name}!` message within a `p` tag.
Render this component to you `App` component, passing it a `name` prop of your choosing.*/
export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
            </>
        )
    }
}

/*Props-02: What happens if no `name` prop is passed to the `Welcome` component?
Can you set a default value for the `name` prop?
If no name` prop is passed to the `Welcome` component, only the part of the string that I have compiled will be rendered, that is "Welcome,".
Yes, I can set a default value for the `name` prop.*/
Welcome.defaultProps = {
    name:"Aida"
}

/*Props-03: Modify the `Welcome` component so that it receives a second prop called `age` and renders it below the `welcome` message,
within a `p` tg after the message `"Your age is"`. SVOLTO ALLA RIGA 10*/