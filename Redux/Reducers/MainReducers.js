import { combineReducers } from "redux";
import weatherCurrentInfo from "./WeatherCurrentReducer";
import weatherForcastInfo from "./WeatherForcastReducer";

import autoCompleteInfo from "./AutoCompleteReducer";

const AllReducers = combineReducers({
  autoCompleteInfo,
  weatherCurrentInfo,
  weatherForcastInfo
});
export default AllReducers;
