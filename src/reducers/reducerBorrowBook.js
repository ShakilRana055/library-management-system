
import { createSlice } from "@reduxjs/toolkit";
const borrowBookSlice = createSlice({
    name: "BorrowBook",
    initialState: {
        list: [],
    },
    reducers:{
        LoadBorrowBook: (state, action) =>{
            state.list = action.payload;
        },
        CreatedBorrowBook:(state, action) =>{
            state.list.push(action.payload);
        },
        UpdatedBorrowBook: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list[index] = action.payload;
        },
        DeletedBorrowBook: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list.splice( index, 1);
        },
    }
});

export const { LoadBorrowBook, CreatedBorrowBook, UpdatedBorrowBook, DeletedBorrowBook } = borrowBookSlice.actions;
export default borrowBookSlice.reducer;