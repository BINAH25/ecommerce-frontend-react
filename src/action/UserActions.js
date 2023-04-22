import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constantants/UserConstants'
import axios from 'axios'
export const listProducts = () => async (dispatch)=>{
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
        
    }
}

export const login = (email,password) => async(dispatch)=>{
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const config = {
            headers:{
                'content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            '/api/login/',
            {'username': email,'password':password},
            config
            )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.data.details
            ? error.response.data.details
            : error.message
        })
    }
}