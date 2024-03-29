import actions_names from "../../Constans/actions";

export default function getAutoCompleteCity(cityString) {
  console.log("@@@@", cityString);
  const locationKey = "ANLnOrUjJlAZirkrBvHrSVJG99s089dt";

  return function(dispatch) {
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${locationKey}&q=${cityString}&language=en`
    )
      .then(Response => {
        console.log("Response: ", Response);
        if (Response.status === 200 && Response.ok === true) {
          return Response.json();
        } else {
          throw new Error("Something went wrong in fetching auto-complete");
        }
      })
      .then(JSONres => {
        console.log("JSONres: ", JSONres);
        //dispatch the action
        dispatch({ type: actions_names.auto_complete, payload: JSONres });
      })
      .catch(err => {
        dispatch({
          type: actions_names.auto_complete_failed,
          payload: "Failed to get the auto complete city."
        });
      });
  };
}
