// import api from "./services/apiService";
import "../css/style.css";
import "./plugins";
import locations from "./store/locations";

locations
  .init()
  .then(() => {
    console.log(locations);
    console.log(locations.getCitiesByCountryCode("UZ"));
  })
  .catch((error) => {
    console.error("Error initializing locations:", error);
  });
// api.countries().then((res) => console.log(res));
// api.cities().then((res) => console.log(res));
