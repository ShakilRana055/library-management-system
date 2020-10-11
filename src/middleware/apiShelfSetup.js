
import * as apiConstant from "../apiConstant/apiConstant";
import axios from "axios";
import * as actionCreator from "../reducers/reducerShelfSetup";

const apiShelfSetup = ({dispatch}) => next => async action=>{
    const { url, method, data, onSuccess, onError} = action.payload;

    if( action.type === apiConstant.shelfSetUpApiCalled)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL:apiConstant.baseUrl,
                url,
                onSuccess,
                onError
            });
            dispatch(actionCreator.LoadShelfSetup(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.shelfSetUpApiCreated)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL:apiConstant.baseUrl,
                url,
                method,
                data,
                onSuccess,
                onError
            });
            dispatch(actionCreator.CreatedShelfSetup(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.shelfSetUpApiUpdated)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL:apiConstant.baseUrl,
                url,
                method,
                data,
                onSuccess,
                onError
            });
            dispatch(actionCreator.UpdatedShelfSetup(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.shelfSetUpApiDeleted)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL:apiConstant.baseUrl,
                url,
                method,
                onSuccess,
                onError
            });
            dispatch(actionCreator.DeletedShelfSetup(response.data));
        } catch (error) {
            
        }
    }
    else
        return next(action);
}

export default apiShelfSetup;