import axios from "axios";

const API_URL = "http://localhost:8080";
const INSTRUCTOR = "cust";

const NEW_API_URL = `${API_URL}/${INSTRUCTOR}/all`;

class CustDataService {
  getTimeline() {
    return axios.get(`${NEW_API_URL}`);
  }
}

export default new CustDataService();