import axios from "axios";
const locationKey = "uhgT3zk1J4ov3ni3airgXGnRLZf36jV2";
const weatherStackKey = "b07fa8cb9ce3216ba937d1aa38d1ec27";
export default function getAutoCompleteCity(cityString) {
  return function(dispatch) {
    fetch(
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" +
        locationKey +
        "&q=" +
        cityString +
        "&language=en"
    )
      .then(Response => {
        return Response.json();
      })
      .then(JSONres => {
        //dispatch the action
        dispatch({ type: "AUTO_INFO", payload: JSONres });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
