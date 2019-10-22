const locationKey = "	uhgT3zk1J4ov3ni3airgXGnRLZf36jV2";
const weatherStackKey = "b07fa8cb9ce3216ba937d1aa38d1ec27";

export default function getWeeklytWeather(cityKey) {
  return function(dispatch) {
    fetch(
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
        cityKey +
        "?apikey=" +
        locationKey +
        "&language=en&details=true&metric=true"
    )
      .then(Response => {
        return Response.json();
      })
      .then(JSONres => {
        //dispatch the action
        dispatch({ type: "WEATHER_FORCAST_INFO", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
