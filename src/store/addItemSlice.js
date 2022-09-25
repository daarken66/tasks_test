import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addingTask: false,
    addingSubtask: false
}

export const addItemSlice = createSlice({
    name: 'addItem',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.addingTask = action.payload
        },
        addSubtask: (state, action) => {
            state.addingSubtask = action.payload
        },
        closeAddItem: (state) => {
            state.addingTask = false;
            state.addingSubtask = false;
        }
    },
})


export const { addTask, addSubtask, closeAddItem } = addItemSlice.actions

export default addItemSlice.reducer