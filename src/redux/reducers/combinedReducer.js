import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tweetReducer from './tweetReducer';
import userReducer from './userReducer';

export default combineReducers({
    authReducer,
    tweetReducer,
    userReducer,
});
