import actions from "../../Constans/actions";
const weatherForcastInfo = (
  state = {
    weatherForcastInfo: [],
    errorMassage: ""
  },
  action
) => {
  switch (action.type) {
    case actions.forcast_weather:
      return {
        ...state,
        weatherForcastInfo: action.payload,
        errorMassage: ""
      };
    case actions.forcast_weather_failed:
      return {
        ...state,
        errorMassage: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
export default weatherForcastInfo;
