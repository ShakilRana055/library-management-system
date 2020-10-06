import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerUser";

const apiUser = ({ dispatch }) => next => action =>{
    const { url, data, onSuccess, onError } = action.payload;

    if(action.type ===  apiConstant.attemptToLog){
        next(action);
        dispatch(actionCreator.GotUserInformation(data));
    }
    else{
        return next(action);
    }
}

export default apiUser;