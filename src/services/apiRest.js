import axios from "axios"; // For making client request.

export const BASE_URL = "http://localhost:50129";

export const post = (url, data, headers) => {
  return axios.post(BASE_URL + url, data, {
    headers: {
      "X-Bonita-API-Token": sessionStorage.getItem("Cookie"),

      ...headers
    },
    withCredentials: true
  });
};

export const get = (url, headers) => {
  return axios.get(BASE_URL + url, {
    headers: {
      "X-Bonita-API-Token": sessionStorage.getItem("Cookie"),
      ...headers
    },
    withCredentials: true
  });
};

export const put = (url, data, headers) => {
  return axios.put(BASE_URL + url, data, {
    headers: {
      "X-Bonita-API-Token": sessionStorage.getItem("Cookie"),

      ...headers
    },
    withCredentials: true
  });
};
