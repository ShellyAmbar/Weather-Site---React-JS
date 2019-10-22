const weatherCurrentInfo = (
  state = {
    weatherCurrentInfo: {}
  },
  action
) => {
  if ((action.type = "WEATHER_CURRENT_INFO")) {
    state = { ...state, weatherCurrentInfo: action.payload };
    return state;
  }
};
export default weatherCurrentInfo;
