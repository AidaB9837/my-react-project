import { legacy_createStore as createStore} from "redux";
import { counterReducer } from "./CounterState";

/*Redux 02: Create a store that uses CounterReducer as its root reducer, and dispatch an INCREMENT action on the store. 
Verify that the state updates as expected. */

export const store = createStore(counterReducer)