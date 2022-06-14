import React from 'react'
import {Message} from './Message'

//Components-02: Write a `Hello` class components that renders the `"Hello, World!"` message within an `h1` tag.
export class Hello extends React.Component {
    render() {
        return (
            <>
                <h1>Hello, World!</h1>
                <Message />
            </>
        )
    }
}