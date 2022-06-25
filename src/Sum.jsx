import React from "react";

/*Function Components 02: -   14.2 Write a `Sum` function component that receives a `numbers` prop (expected to be an array of numbers) 
and renders the sum of all numbers in the array within a `h1` tag.*/

export function Sum (props) {
    const arraySum = props.number
    let sum = 0
    for (let i=0; i < arraySum.length; i++) {
        sum += arraySum[i]
    }
    return <h1>The sum of number within the array is: {sum}</h1>
}