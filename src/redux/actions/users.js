import { GET_ALL_USERS,ADD_USER } from '../action-types/index'
import axios from '../../config/axios'
import { toast } from 'react-toastify';


export const getUsersAction = () => async(dispatch) => {
    const { data } = await axios.get('users/');
    dispatch({ type: GET_ALL_USERS, payload: data.data });
}

export const AddUsersAction = (props) => async(dispatch) => {
try {
    const { data } = await axios.post('users/',props);
    dispatch({ type: ADD_USER, payload: data.data });
    toast.success(data.message);
} catch (error) {
    return error;
}
}