import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import AllReducers from "./Reducers/MainReducers";

//-- middleware
const middleware = applyMiddleware(thunk);
//-- store
const Store = createStore(AllReducers, middleware);

export default Store;
