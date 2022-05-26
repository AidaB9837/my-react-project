import React from 'react'

//Components-02: Write a `Hello` class components that renders the `"Hello, World!"` message within an `h1` tag.
export class Hello extends React.Component {
    render() {
        return (
            <>
                <h1>Hello, World!</h1>
                <p>What a beautiful day!</p>
            </>
        )
    }
}