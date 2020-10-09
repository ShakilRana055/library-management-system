import * as apiConstant from "../apiConstant/apiConstant";
import * as actionCreator from "../reducers/reducerStudent";
import axios from "axios";

const apiStudent = ({ dispatch }) => next => async action =>{
    const { url, data, onSuccess, onError, method } = action.payload;

    if(action.type ===  apiConstant.studentApiCalled){
        next(action);
        try {
            let response = await axios.request({
                baseURL: apiConstant.baseUrl,
                url,
                method,
                onSuccess,
                onError,
            });
            dispatch(actionCreator.LoadStudent(response.data));
        } catch (error) {
            
        }
    }
    else if(action.type === apiConstant.studentApiCreated){
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
            dispatch(actionCreator.CreatedStudent(response.data));
        } catch (error) {
            
        }
    }
    else{
        return next(action);
    }
}

export default apiStudent;