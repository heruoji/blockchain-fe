import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export class ApiClient {
  basePath;
  axiosInstance;

  constructor(basePath, axiosInstance) {
    this.basePath = basePath ? basePath : "";
    this.axiosInstance = axiosInstance;
  }

  getWallet() {
    return this.axiosInstance.get(`${this.basePath}/wallet`);
  }

  postTransaction(requestBody) {
    return this.axiosInstance.post(
      `${this.basePath}/transaction-pool`,
      requestBody
    );
  }

  getChains() {
    return this.axiosInstance.get(`${this.basePath}/chains`);
  }

  getTotalAmount(address) {
    return this.axiosInstance.get(
      `${this.basePath}/deposits?address=${address}`
    );
  }
}

export const apiClient = new ApiClient(process.env.BASE_URL, axiosInstance);
