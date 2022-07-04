import { createSlice } from "@reduxjs/toolkit";

export const todosState = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },

        remove: (state, action) => state.filter((todo) =>
         todo.id !== action.payload.id),

        edit: (state, action) => {
            const {id, data} = action.payload
            const todo = state.find((t) => t.id === id)

            for (let key in data) {
                todo[key] = data[key]
            }
        }
    }
})