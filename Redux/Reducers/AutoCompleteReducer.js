import actions from "../../Constans/actions";
const autoCompleteInfoReducer = (
  state = {
    autoCompleteInfo: [],
    errorMassage: ""
  },
  action
) => {
  switch (action.type) {
    case actions.auto_complete:
      return {
        ...state,
        autoCompleteInfo: action.payload,
        errorMassage: ""
      };
    case actions.auto_complete_failed:
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
export default autoCompleteInfoReducer;
