
import { combineReducers } from "redux"

import student from "../reducers/reducerStudent";
import user from "../reducers/reducerUser";
import shelf from "../reducers/reducerShelfCreate";

export default combineReducers({
    student: student,
    user: user,
    shelfCreate: shelf,
});