import axios from 'axios';
import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerUser";

const apiUser = ({ dispatch }) => next => async action =>{
    const { url, data, onSuccess, onError, method } = action.payload;

    if(action.type ===  apiConstant.attemptToLog){
        next(action);
        try {
            let response = await axios.request({
                baseURL:apiConstant.baseUrl,
                url,
                method,
                data,
                onSuccess,
                onError,
            });
            dispatch(actionCreator.GotUserInformation(response.data));
        } catch (error) {
            console.log(error);
        }
    }
    else{
        return next(action);
    }
}

export default apiUser;