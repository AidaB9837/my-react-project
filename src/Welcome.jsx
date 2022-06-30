import React from 'react'
import { useParams } from 'react-router-dom'
import { Age } from './Age'


export function Welcome(props) {
    const { name = "Aida" } = useParams()
    return (
        <div className="welcome">
                 {props.name ? <p>Welcome, <strong>{props.name}</strong></p> : name && <p>Welcome, <strong>{name}</strong></p>}
                 {props.age > 18 && props.age < 65 && props.name === 'John' ? <Age age={props.age}/> : null} 
             </div>
    )
}
