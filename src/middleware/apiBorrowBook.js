import axios from "axios";
import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerBorrowBook";

const apiBorrowBook = ({dispatch}) => next => async action =>{
    const { url, method, data, onSuccess, onError} = action.payload;
    if( action.type === apiConstant.borrowBookApiCalled )
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                onSuccess,
                onError,
            });
            dispatch(actionCreator.LoadBorrowBook(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.borrowBookApiCreated )
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
            dispatch(actionCreator.CreatedBorrowBook(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.borrowBookApiUpdated )
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
            dispatch(actionCreator.UpdatedBorrowBook(response.data));
        } catch (error) {
            
        }
    }
    else if( action.type === apiConstant.borrowBookApiDeleted )
    {
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                onSuccess,
                onError,
            });
            dispatch( actionCreator.DeletedBorrowBook(response.data));
        } catch (error) {
            
        }
    }
    else{
        return next(action);
    }
}

export default apiBorrowBook;