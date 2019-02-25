import { combineReducers } from 'redux';

import monthReducer from './month';
import errorReducer from './error';
import monthDetailReducer from './monthDetail';

export default combineReducers({
    monthReducer,
    errorReducer,
    monthDetailReducer
});