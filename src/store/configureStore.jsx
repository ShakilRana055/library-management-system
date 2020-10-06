
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from "../reducerCombine/reducer";
export default function()
{
    return configureStore({
        reducer: reducer,
        middleware:[
            ...getDefaultMiddleware(),
        ],
    });
}