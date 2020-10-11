
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from "../reducerCombine/reducer";
import apiUser from "../middleware/apiUser";
import apiShelfCreate from '../middleware/apiShelfCreate';
import apiStudent from "../middleware/apiStudent";
import apiBook from "../middleware/apiBook";
import apiShelfSetup from "../middleware/apiShelfSetup";
import apiBorrowBook from "../middleware/apiBorrowBook";

export default function()
{
    return configureStore({
        reducer: reducer,
        middleware:[
            ...getDefaultMiddleware(),
            apiUser,
            apiShelfCreate,
            apiStudent,
            apiBook,
            apiShelfSetup,
            apiBorrowBook,
        ],
    });
}