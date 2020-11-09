import axios from "axios";
import { QueryAllCountry } from "./Query";

const apiUrl = "https://countries-274616.ew.r.appspot.com/";

const ServiceAllCountry = (params = {}) =>
  axios.post(apiUrl, {
    query: QueryAllCountry,
    variables: { filterCountry: params},
  });

export default ServiceAllCountry;
