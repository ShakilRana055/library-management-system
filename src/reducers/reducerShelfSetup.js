import { createSlice } from "@reduxjs/toolkit";

const shelfSetupSlice = createSlice({
    name: "ShelfSetup",
    initialState: {
        list: []
    },
    reducers: {
        LoadShelfSetup: (state, action) =>{
            state.list = action.payload;
        },
        CreatedShelfSetup:(state, action) =>{
            state.list.push(action.payload);
        },
        UpdatedShelfSetup: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list[index] = action.payload;
        },
        DeletedShelfSetup: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list.splice( index, 1);
        },
    }
});

export const{ LoadShelfSetup, CreatedShelfSetup, UpdatedShelfSetup, DeletedShelfSetup } = shelfSetupSlice.actions;
export default shelfSetupSlice.reducer;