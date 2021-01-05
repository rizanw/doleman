
export const geocoding = (lat: string, lon: string) => {
  fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      lat +
      "," +
      lon +
      "&key=" + "api here"
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(
        "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
      );
    });
};
