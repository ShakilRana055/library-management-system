import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerShelfCreate";

const apiShelfCreate = ({ dispatch }) => next => action =>{
    const { url, data, onSuccess, onError, method } = action.payload;

    if(action.type ===  apiConstant.shelfApiCalled){
        next(action);
        dispatch(actionCreator.LoadShelf(data));
    }
    else if(action.type === apiConstant.shelfApiCreated){
        next(action);
        console.log(data);
        dispatch(actionCreator.CreatedShelf(data));
    }
    else{
        return next(action);
    }
}

export default apiShelfCreate;