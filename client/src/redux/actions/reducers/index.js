import { combineReducers } from "redux";
import securityReducer from './security';
import eventReducer from './event';

const rootReducer = combineReducers({
    security: securityReducer,
    event: eventReducer
});

export default rootReducer;