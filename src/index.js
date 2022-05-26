import ReactDOM from 'react-dom'
import { App } from './App'

//Components-04: Create a new `index.js` file within the `src` folder and render the `App` component using the `ReactDOM.render` method.
const root = document.querySelector('#root')

ReactDOM.render(<App />, root)