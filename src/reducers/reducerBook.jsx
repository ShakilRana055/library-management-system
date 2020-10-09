
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "Book",
    initialState: {
        list: [],
    },
    reducers: {
        LoadBook: (state, action) =>{
            state.list = action.payload;
        },
        CreatedBook: (state, action) =>{
            state.list.push(action.payload);
        },
        UpdatedBook: (state, action) =>{
            let index = state.list.findIndex(item => item === action.payload.id);
            state.list[index] = action.payload;
        },
        DeletedBook: (state, action) =>{
            let index = state.list.findIndex(item => item === action.payload.id);
            state.list.splice(index, 1);
        },
    }
});

export const { LoadBook, CreatedBook, UpdatedBook, DeletedBook} = bookSlice.actions;
export default bookSlice.reducer;