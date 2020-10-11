
import { combineReducers } from "redux"

import student from "../reducers/reducerStudent";
import user from "../reducers/reducerUser";
import shelf from "../reducers/reducerShelfCreate";
import book from "../reducers/reducerBook";
import shelfSetup from "../reducers/reducerShelfSetup";
import borrowBook from "../reducers/reducerBorrowBook";



export default combineReducers({
    student: student,
    user: user,
    shelfCreate: shelf,
    book : book,
    shelfSetup : shelfSetup,
    borrowBook: borrowBook,
});