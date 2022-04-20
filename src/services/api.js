import { API_BASE_URL } from "utils/constants";

class APIService {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }
  onFailed = (e) => {
    console.error(e);
  };
  handleResponse = async (response) => {
    if (!response.ok) {
      this.onFailed(response.statusText);
      throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
  };
  fetchUsers = async () => {
    const url = `${this.baseUrl}/users`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
  fetchProjects = async () => {
    const url = `${this.baseUrl}/projects`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
  fetchGateways = async () => {
    const url = `${this.baseUrl}/gateways`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
  fetchReports = async (params) => {
    if (params !== null) {
      const url = `${this.baseUrl}/report`;
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      };
      return await fetch(url, config).then(this.handleResponse);
    }
  };
}

const apiService = new APIService();
export default apiService;
