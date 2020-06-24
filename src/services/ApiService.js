import axios from "axios";

class ApiService {
  upload(data) {
    return axios.post("http://localhost:8050/upload", data, {
      headers: { "Content-Type": "text/xml; charset=utf-8" }
    });
  }

  download() {
    return axios.get("http://localhost:8050/download");
  }
  hello() {
    return axios.get("http://localhost:8050/hello");
  }
}

export default new ApiService();
