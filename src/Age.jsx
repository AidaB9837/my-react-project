import React from "react";

/*Props-05: Extract the `"Your age is "` message into a new component called `Age` and render it within the `Welcome` component.
Pass to the `Age` component the `age` prop that `Welcome` is receiving from the `App` component. */
export class Age extends React.Component {
    render() {
        return (
            <>
                {this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young!</p>}
            </>
        )
    }
}

//Conditional Rendering-05: Modify the `Age` component so that the `"Your age is "` message is rendered only if the `age` prop is greater than `18`. Otherwise render the `"You are very young!"` message. SVOLTO ALLA RIGA 9.