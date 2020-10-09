import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerShelfCreate";
import axios from "axios";

const apiShelfCreate = ({ dispatch }) => next => async action =>{
    const { url, data, onSuccess, onError, method } = action.payload;

    if(action.type ===  apiConstant.shelfApiCalled){
        next(action);
        dispatch(actionCreator.LoadShelf(data));
    }
    else if(action.type === apiConstant.shelfApiCreated){
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                method,
                data,
                onSuccess,
                onError,
            })
            dispatch(actionCreator.CreatedShelf(response.data));
        } catch (error) {
            
        }
        dispatch(actionCreator.CreatedShelf(data));
    }
    else{
        return next(action);
    }
}

export default apiShelfCreate;