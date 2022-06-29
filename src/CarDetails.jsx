import { useEffect, useRef } from "react"
import { useState } from "react"

/*useRef 02: Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user 
to insert details about a car, such as the model, the year and the color. 
Allow the form to receive a initialData prop that contains the default values of each input, 
and reset the form every time the initialData value changes. */

//DA VEDERE CON JACOPO (console.log new details about car)
export function CarDetails({initialData}){
    const [model, setModel] = useState()
    const [year, setYear] = useState()
    const [color, setColor] = useState()
    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()


    useEffect(() => {
        modelRef.current.focus()
    }, [])

    useEffect(() => {
        modelRef.current.value = initialData.model
        yearRef.current.value = initialData.year
        colorRef.current.value = initialData.color
    }, [initialData]) 


    function handleModelChange(event) {
        setModel(event.target.value)
    }

    function handleYearChange(event) {
        setYear(event.target.value)
    }

    function handleColorChange(event) {
        setColor(event.target.value)
    }
    
    function handleSubmitCar(event) {
       return(
            console.log(initialData.model, initialData.year, initialData.color), 
            modelRef.current.value = "",
            yearRef.current.value = "",
            colorRef.current.value = ""
            )
    }

    return <>
                <h1>Car Details:</h1>
                <form>
                    <label>Model: </label>
                    <input name="model" value={model} ref={modelRef} defaultValue={initialData.model} onChange={handleModelChange} type="text" placeholder="Model" ></input><br></br>
                    <label>Year: </label>
                    <input name="year" value={year} ref={yearRef} defaultValue={initialData.year} onChange={handleYearChange} type="number" placeholder="Year" ></input><br></br>
                    <label>Color: </label>
                    <input name="color" value={color} ref={colorRef} defaultValue={initialData.color} onChange={handleColorChange} type="text" placeholder="Color" ></input>
                </form>

                <button type="submit" onClick={handleSubmitCar}>Submit</button>
            </>
}