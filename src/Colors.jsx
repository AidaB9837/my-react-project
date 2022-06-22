import React from "react";

/*Lists 01: Create a `Colors` component that renders a `ul` tag with a `li` tag for each color passed in the `items` prop.
The `items` prop should be an array of strings.*/



export class Colors extends React.Component {
    render() {
        return <>
                    <h1>List of Primary Color:</h1>
{/* Lists 02: Modify the `Colors` component so that `items` is expected to be an array of objects each containing an `id` and a `name` property.
Render the `name` property of each object within a `li` tag, and use the `id` as a key.
Svolto tra le righe 16-18 di Colors.jsx e 12-17 di App.jsx */}
                    <ul>
                        {this.props.colors.map((color) => (
                        <li key={color.id}>{color.name}</li>
                        ))}
                    </ul>
               </>
    }
}
