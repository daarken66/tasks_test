import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedTask: null,
    selectedSubtask: null
}

export const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        updateSelectedTask: (state, action) => {
            state.selectedTask = action.payload
        },
        updateSelectedSubtask: (state, action) => {
            state.selectedSubtask = action.payload
        }
    },
})


export const { updateSelectedTask, updateSelectedSubtask } = selectedSlice.actions

export default selectedSlice.reducer