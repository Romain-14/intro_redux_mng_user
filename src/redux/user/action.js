import {LOAD_ALL_USERS, ADD_USER} from '../type';


export const loadAllUsers = () => {
    return {
        type: LOAD_ALL_USERS,
    }
}
export const addUsers = (datas) => {
    return {
        type: ADD_USER,
        payload: datas
    }
}