
import { applyMiddleware, createStore } from "redux";
import combineReducers from "./reducers";
import thunk from 'redux-thunk'


export default createStore(combineReducers ,applyMiddleware(thunk))



