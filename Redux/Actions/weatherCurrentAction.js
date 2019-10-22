const locationKey = "	uhgT3zk1J4ov3ni3airgXGnRLZf36jV2";
const weatherStackKey = "b07fa8cb9ce3216ba937d1aa38d1ec27";

export default function getCurrentWeather(cityKey) {
  return function(dispatch) {
    fetch(
      "http://dataservice.accuweather.com/currentconditions/v1/" +
        cityKey +
        "?apikey=" +
        locationKey +
        "&language=en&details=true"
    )
      .then(Response => {
        return Response.json();
      })
      .then(JSONres => {
        //dispatch the action
        dispatch({ type: "WEATHER_CURRENT_INFO", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
