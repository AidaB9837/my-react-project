// import ReactDOM from 'react-dom'
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import { Root } from "./Root"
import { counterState } from "./state/CounterState"
import { store } from "./state/Store"
import { todosState } from "./state/TodosState"

//Components-04: Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
/*
const root = document.getElementById('root')

ReactDOM.render(<App />, root)
*/
//But, ReactDOM has been deprecated, than I will use createRoot:

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

// root.render(
//     <StrictMode>
//         <Root />
//     </StrictMode>
// )

/*Redux 05: Subscribe to the store and verify that each state update trigger the subscription callback.*/
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(counterState.actions.increment(5))


store.dispatch(todosState.actions.add({
    id: 1,
    title: "Go to the Sea",
    completed: false
}))

store.dispatch(counterState.actions.decrement(2))

store.dispatch(todosState.actions.add({
    id: 2,
    title: "Go out with Friends",
    completed: true
}))

store.dispatch(counterState.actions.reset())

store.dispatch(todosState.actions.edit({id: 1, data: { completed: true } }))