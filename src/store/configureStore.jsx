
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from "../reducerCombine/reducer";
import apiUser from "../middleware/apiUser";
import apiShelfCreate from '../middleware/apiShelfCreate';
import apiStudent from "../middleware/apiStudent";



export default function()
{
    return configureStore({
        reducer: reducer,
        middleware:[
            ...getDefaultMiddleware(),
            apiUser,
            apiShelfCreate,
            apiStudent,
        ],
    });
}