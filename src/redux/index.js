import { combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./AuthReducer";
import { legacy_createStore as  createStore} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;