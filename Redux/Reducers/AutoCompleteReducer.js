const autoCompleteInfo = (
  state = {
    autoCompleteInfo: {}
  },
  action
) => {
  if ((action.type = "AUTO_INFO")) {
    state = { ...state, autoCompleteInfo: action.payload };
  }
  return state;
};
export default autoCompleteInfo;
