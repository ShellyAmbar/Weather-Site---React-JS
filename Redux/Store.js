import thunk from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import {
  autoCompleteInfoReducer,
  weatherCurrentInfoReducer,
  weatherForcastInfoReducer
} from "./Reducers";

//-- middleware
const middleware = applyMiddleware(thunk);
//-- store
const rootReducer = combineReducers({
  auto: autoCompleteInfoReducer,
  current: weatherCurrentInfoReducer,
  forcast: weatherForcastInfoReducer
});

const Store = createStore(rootReducer, middleware);

export default Store;
