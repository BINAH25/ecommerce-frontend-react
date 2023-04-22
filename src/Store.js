import { configureStore } from '@reduxjs/toolkit'
import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    productListReducer,
    productDetailsReducer,
 } from './reducers/ProductReducer'

import {
    userLoginReducer
} from './reducers/UserReducer'
const userInfoFromStorage = localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')):null

const reducer = combineReducers({
    productList:productListReducer,
    productDetail: productDetailsReducer,
    userLogin: userLoginReducer
})
const initialState = {
    userLogin:{usenInfo:userInfoFromStorage}
}
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(... middleware)))

export default store