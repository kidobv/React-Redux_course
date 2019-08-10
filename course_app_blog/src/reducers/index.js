import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import userReducer from './usersReducer'

export default combineReducers({ //giving a dummy reducer to trick Redux into thinking we have valid reducers
    posts: postsReducer,
    users: userReducer
});