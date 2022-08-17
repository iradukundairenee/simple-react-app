import {GET_ALL_USERS,GET_ALL_USERS_Failed} from '../action-types'
const staff = (state ={loading:false}, {type,payload}) => {
    switch (type) {
        case GET_ALL_USERS:
            return {loading:false,data:payload}
        case GET_ALL_USERS_Failed:
            return {loading:false}
        default:
            return state;
    }
}
export default staff;