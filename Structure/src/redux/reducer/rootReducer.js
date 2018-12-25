import userReducer from './userReducer'
import uiReducer from './uiReducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({ userReducer, uiReducer });
export default rootReducer;