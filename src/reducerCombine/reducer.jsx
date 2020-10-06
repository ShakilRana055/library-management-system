import { combineReducers } from "redux"

import reducers from "./combineReducer";
export default combineReducers({
    entities: reducers,
});