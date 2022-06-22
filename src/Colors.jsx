import React from "react";

/*Lists 01: 
Create a `Colors` component that renders a `ul` tag with a `li` tag for each color passed in the `items` prop.
The `items` prop should be an array of strings.*/

export class Colors extends React.Component {
    render() {
        const items = this.props.colors.map((color) => <li>{color}</li>)
        return <>
                    <h1>List of Primary Color:</h1>
                    <ul>
                        {items}
                    </ul>
               </>
    }
}