import actions from "../../Constans/actions";

const weatherCurrentInfo = (
  state = {
    weatherCurrentInfo: [],
    errorMassage: ""
  },
  action
) => {
  switch (action.type) {
    case actions.current_weather:
      return {
        ...state,
        weatherCurrentInfo: action.payload,
        errorMassage: ""
      };
    case actions.current_weather_failed:
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
export default weatherCurrentInfo;
