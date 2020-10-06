
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "User",
    initialState: {
        list: [],
        userInformation:'',
    },
    reducers: {
        LoadUser: (state, action) =>{
            state.list = action.payload;
        },
        CreatedUser:(state, action) =>{
            state.list.push(action.payload);
        },
        UpdatedUser: (state, action) =>{

        },
        DeletedUser: (state, action) =>{
            let index = state.list.findIndex( item => item.id === action.payload.id);
            state.list.splice( index, 1);
        },
        GotUserInformation:(state, action) =>{
            state.userInformation = action.payload;
        },
    }
});

export const { LoadUser, CreatedUser, UpdatedUser, DeletedUser, GotUserInformation} = slice.actions;
export default slice.reducer;