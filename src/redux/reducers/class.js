import {GET_ALL_CLASSES,GET_ALL_CLASSES_FAILED} from '../action-types'
const classes = (state ={loading:false}, {type,payload}) => {
    switch (type) {
        case GET_ALL_CLASSES:
            return {loading:false,data:payload}
        case GET_ALL_CLASSES_FAILED:
            return {loading:false}
        default:
            return state;
    }
}
export default classes;