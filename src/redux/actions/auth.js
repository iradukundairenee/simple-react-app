import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN, } from '../action-types/index'
import { toast } from 'react-toastify';
import axios from '../../config/axios'

export const logInAction = (props) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN, payload: "WAITING" });
        const { data } = await axios.post('users/login', props);
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });
        const userInfo = JSON.stringify(data.data);
        localStorage.setItem('userInfo', userInfo)
        toast.success(data.message);
        window.location.href="/";
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: { message:"FAILED", error } });
        throw error;
    }
}