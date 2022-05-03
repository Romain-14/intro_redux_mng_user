import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import  {composeWithDevTools} from 'redux-devtools-extension';

// import countReducer from './counter/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
    // countReducer,
    userReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = legacy_createStore(rootReducer, {}, composedEnhancer);

export default store;