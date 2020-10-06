import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "Student",
    initialState: {
        list: [],
    },
    reducers: {
        LoadStudent: (state, action) =>{
            state.list = action.payload;
        },
        CreatedStudent:(state, action) =>{
            state.list.push(action.payload);
        },
        UpdatedStudent: (state, action) =>{

        },
        DeletedStudent: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list.splice( index, 1);
        },
    }
});

export const { LoadStudent, CreatedStudent, UpdatedStudent, DeletedStudent} = slice.actions;
export default slice.reducer;