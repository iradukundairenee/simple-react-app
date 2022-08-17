import { GET_ALL_CLASSES,ADD_CLASS } from '../action-types/index'
import axios from '../../config/axios'
import { toast } from 'react-toastify';


export const getClassesAction = () => async(dispatch) => {
    const { data } = await axios.get('class/');
    dispatch({ type: GET_ALL_CLASSES, payload: data.data });
}

export const AddClassAction = (props) => async(dispatch) => {
try {
    const { data } = await axios.post('class/',props);
    dispatch({ type: ADD_CLASS, payload: data.data });
    toast.success(data.message);
} catch (error) {
    return error;
}
}