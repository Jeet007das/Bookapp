import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import userReducer from './userReducer';

const reducer =  combineReducers({
    book:bookReducer,
    user:userReducer
})

export default reducer;
