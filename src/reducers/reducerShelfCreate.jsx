import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "ShelfCreate",
    initialState: {
        list: []
    },
    reducers: {
        LoadShelf: (state, action) =>{
            state.list = action.payload;
        },
        CreatedShelf:(state, action) =>{
            state.list.push(action.payload);
        },
        UpdatedShelf: (state, action) =>{

        },
        DeletedShelf: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list.splice( index, 1);
        },
    }
});

export const { LoadShelf, CreatedShelf, UpdatedShelf, DeletedShelf} = slice.actions;
export default slice.reducer;