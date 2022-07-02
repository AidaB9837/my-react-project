// import ReactDOM from 'react-dom'
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import { Root } from "./Root"
import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState"
import { store } from "./state/Store"
import { addTodo, editTodo } from "./state/TodosState"

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

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter(5))


store.dispatch(addTodo({
    id: 1,
    title: "Go to the Sea",
    completed: false
}))

store.dispatch(decrementCounter(2))

store.dispatch(addTodo({
    id: 2,
    title: "Go out with Friends",
    completed: true
}))

store.dispatch(resetCounter())

store.dispatch(editTodo(1, {completed: true}))