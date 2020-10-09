
import { combineReducers } from "redux"

import student from "../reducers/reducerStudent";
import user from "../reducers/reducerUser";
import shelf from "../reducers/reducerShelfCreate";
import book from "../reducers/reducerBook";
export default combineReducers({
    student: student,
    user: user,
    shelfCreate: shelf,
    book : book,
});