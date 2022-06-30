import { useMemo } from "react"

/*useMemo: Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. 
The FilteredList component should render only the items of the list whose age is greater than 18, 
and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list. */

const itemsFilteredList = [
    {id: 1, name:"Aida", age: 24},
    {id: 2, name:"Maria", age: 35},
    {id: 3, name:"Chiara", age: 10},
    {id: 4, name:"Anna", age: 40},
    {id: 5, name:"Laura", age: 8},
    {id: 6, name:"Silvia", age: 15}
]

export function FilteredList(){

    const filterItems = useMemo(() =>
        itemsFilteredList.map((itemsFilteredList, index) => itemsFilteredList.age > 18 && <li key={itemsFilteredList + index}>{(itemsFilteredList.name+ " " +itemsFilteredList.age)}</li>),[])
    
       return (
                <>
                    <h1>Filtered List</h1>
                    <ul> {filterItems} </ul>
                </>
        
    )
}