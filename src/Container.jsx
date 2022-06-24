import React from "react";

/*Component Composition 01: Create a `Container` component that renders its children within a `div` tag. Have the `div` tag use
a white background and a red border, either with a custom class or by using `tailwindcss`.*/
export class Container extends React.Component {
    render() {
        return <div className="container bg-white border border-solid border-red-600">
                </div>
    }
}