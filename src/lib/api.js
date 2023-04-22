import axios from "axios";
class Api {
  constructor() {
    const apiURL = "https://private-a96f0-jumpsuitinterview.apiary-mock.com";
    const apiClient = axios.create({
      baseURL: apiURL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    this.apiClient = apiClient;
  }

  vehicles = {
    findById: async (id) => {
      return this.apiClient.get(`/vehicles/${id}`);
    },
    findAll: async () => {
      return this.apiClient.get(`/vehicles`);
    },
  };
}

export default new Api();
