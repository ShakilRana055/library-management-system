
import * as apiConstant from "../apiConstant/apiConstant";
import axios from 'axios';
import * as actionCreator from "../reducers/reducerBook";

const apiBook = ({dispatch}) => next => async action =>{
    const { url, data, method, onSuccess, onError } = action.payload;

    if( action.type === apiConstant.bookApiCalled)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                onSuccess,
                onError,
            });
            dispatch( actionCreator.LoadBook(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.bookApiCreated)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                data,
                onSuccess,
                onError,
            });
            dispatch( actionCreator.CreatedBook(response.data));
        } catch (error) {
            console.log(error);
        }
    }
    else if( action.type === apiConstant.bookApiUpdated)
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                data,
                method,
                onSuccess,
                onError,
            });
            dispatch( actionCreator.UpdatedBook(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.bookApiDeleted)
    {
        next(action);
        console.log(action.payload);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                onSuccess,
                onError,
            });
            dispatch( actionCreator.DeletedBook(response.data));
        } catch (error) {
            
        }
    }
    else{
        return next(action);
    }
}

export default apiBook;