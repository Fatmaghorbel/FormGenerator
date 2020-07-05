import axios from "axios";
export const END_POINT_URL = "http://localhost:8050";

class ApiService {
  upload(data, params) {
    return axios.post(`${END_POINT_URL}/upload`, data, {
      headers: { "Content-Type": "text/xml; charset=utf-8" },
      params
    });
  }

  download() {
    return axios.get(`${END_POINT_URL}/download`);
  }
}

export default new ApiService();
