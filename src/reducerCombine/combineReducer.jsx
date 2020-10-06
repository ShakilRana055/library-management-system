
import { combineReducers } from "redux"

import student from "../reducers/reducerStudent";
import user from "../reducers/reducerUser";


export default combineReducers({
    student: student,
    user: user,
});