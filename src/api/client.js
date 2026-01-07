import axios from "axios";

const api = axios.create({
  baseURL: "https://web-experience-api-xmi4ow.5sc6y6-2.usa-e2.cloudhub.io/api"
});

export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = token;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

export default api;
