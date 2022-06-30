// import ReactDOM from 'react-dom'
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import { Root } from "./Root"

//Components-04: Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
/*
const root = document.getElementById('root')

ReactDOM.render(<App />, root)
*/
//But, ReactDOM has been deprecated, than I will use createRoot:

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Root />
    </StrictMode>
)