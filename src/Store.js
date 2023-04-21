import { configureStore } from '@reduxjs/toolkit'
import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({})
const initialState = {}
middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(... middleware)))

export default store