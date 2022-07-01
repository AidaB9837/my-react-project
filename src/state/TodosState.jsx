/*Redux 03: Create a TodosReducer that handles a list of todos (objects with an id, a title and a completed property), 
allowing for adding, removing and editing actions. */

const defaultState = []

const ADD = "TODOS@ADD"
const REMOVE = "TODOS@REMOVE"
const EDIT = "TODOS@EDIT"

export function addTodo(todo) {
    return {
        type: ADD,
        payload: todo
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE,
        payload: id
    }
}

export function editTodo(id, data) {
    return {
        type: EDIT,
        payload: {id, data}
    }
}

export function todosReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD: {
            return [...state, action.payload]
        }

        case REMOVE: {
            return state.filter(todo => todo !== action.payload)
        }

        case EDIT: {
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, ...action.payload.data}
                }
                return todo
            })
        }

        default: {
            return state
        }
    }
}