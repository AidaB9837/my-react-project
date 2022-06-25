import React from "react";

/*Function Components 02: -   14.2 Write a `Sum` function component that receives a `numbers` prop (expected to be an array of numbers) 
and renders the sum of all numbers in the array within a `h1` tag.*/

/*Function Components 03: What happens if the `numbers` prop of the `Sum` component is not set?
How can you set a default value for this prop? inserendoli esplicitamente nel parametro della function*/
export function Sum ({number = [6,7,8,9,10]}) {
    const arraySum = number
    let sum = 0
    for (let i=0; i < arraySum.length; i++) {
        number = sum += arraySum[i]
    }
    return <h1>The sum of numbers within the array is: {number}</h1>
}
