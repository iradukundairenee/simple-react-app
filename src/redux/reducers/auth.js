import {LOGIN,LOGIN_FAILED,LOGIN_SUCCESS,SIGNUP_SUCCESS} from '../action-types'
const user = (state = {status:''}, {type,payload}) => {
    switch (type) {
        case LOGIN:
            return {status:'loading'};
        case LOGIN_FAILED :
            return {status:'failed'}
        case LOGIN_SUCCESS :
            return {...state,status:'loggedIn',...payload}
        case SIGNUP_SUCCESS :
            return {...state,newUser:true,...payload}
        case 'LOGOUT':
            return {status:''}
        default:
            return state;
    }
}

export default user;