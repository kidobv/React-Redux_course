import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'; //giving it an alias
import authReducer from './authReducer';
import streamReducer from './streamReducers'

export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});