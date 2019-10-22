const weatherForcastInfo = (
  state = {
    weatherForcastInfo: {}
  },
  action
) => {
  if ((action.type = "WEATHER_FORCAST_INFO")) {
    state = { ...state, weatherForcastInfo: action.payload };
    return state;
  }
};
export default weatherForcastInfo;
