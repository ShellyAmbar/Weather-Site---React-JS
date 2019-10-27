import actions_names from "../../Constans/actions";
export default function getWeeklytWeather(cityKey) {
  const locationKey = "ANLnOrUjJlAZirkrBvHrSVJG99s089dt";

  return function(dispatch) {
    fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${locationKey}&language=en&details=false&metric=false`
    )
      .then(Response => {
        if (Response.status === 200 && Response.ok === true) {
          return Response.json();
        } else {
          throw new Error("Something went wrong in fetching foracst weather");
        }
      })
      .then(JSONres => {
        //dispatch the action
        dispatch({
          type: actions_names.forcast_weather,
          payload: JSONres.DailyForecasts
        });
      })
      .catch(err => {
        dispatch({
          type: actions_names.forcast_weather_failed,
          payload: "Failed to get the forcast weather."
        });
      });
  };
}
