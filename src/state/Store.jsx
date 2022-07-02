import { combineReducers, legacy_createStore as createStore} from "redux";
import { counterReducer } from "./CounterState";
import { todosReducer } from "./TodosState";

/*Redux 02: Create a store that uses CounterReducer as its root reducer, and dispatch an INCREMENT action on the store. 
Verify that the state updates as expected. */


/*Redux 04: Modify the store so that it uses a root reducer that combines both the counter and todos reducers. 
Dispatch actions for both the counter and the todos.*/
const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer)