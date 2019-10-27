import actions_names from "../../Constans/actions";

export default function getCurrentWeather(cityKey) {
  const locationKey = "ANLnOrUjJlAZirkrBvHrSVJG99s089dt";

  return function(dispatch) {
    fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${locationKey}&language=en&details=false`
    )
      .then(Response => {
        console.log(Response, "   Response current weather");
        if (Response.status === 200 && Response.ok === true) {
          return Response.json();
        } else {
          throw new Error("Something went wrong in fetching current weather");
        }
      })
      .then(JSONres => {
        console.log(JSONres);
        //dispatch the action
        dispatch({
          type: actions_names.current_weather,
          payload: JSONres
        });
      })
      .catch(err => {
        dispatch({
          type: actions_names.current_weather_failed,
          payload: "Failed to get the current weather."
        });
      });
  };
}
