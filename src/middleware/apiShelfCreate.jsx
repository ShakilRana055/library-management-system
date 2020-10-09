import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerShelfCreate";
import axios from "axios";

const apiShelfCreate = ({ dispatch }) => next => async action =>{
    const { url, data, onSuccess, onError, method } = action.payload;

    if(action.type ===  apiConstant.shelfApiCalled){
        next(action);
        try {
            let response = await axios.request({
                baseURL : apiConstant.baseUrl,
                url,
                onSuccess,
                onError,
            });
            dispatch(actionCreator.LoadShelf(response.data));
        } catch (error) {
            
        }
    }
    else if(action.type === apiConstant.shelfApiCreated){
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                data,
                onSuccess,
                onError,
            })
            dispatch(actionCreator.CreatedShelf(response.data));
        } catch (error) {
            
        }
    }
    else if(action.type === apiConstant.shelfApiUpdated){
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                data,
                onSuccess,
                onError,
            })
            dispatch(actionCreator.UpdatedShelf(response.data));
        } catch (error) {
            
        }
    }
    else if(action.type === apiConstant.shelfApiDeleted){
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                onSuccess,
                onError,
            })
            dispatch(actionCreator.DeletedShelf(response.data));
        } catch (error) {
            
        }
    }
    else{
        return next(action);
    }
}

export default apiShelfCreate;