import axios, { AxiosInstance } from "axios";

type CreateAxiosFnParams = {
  baseUrl?: string;
};

const createAxios = ({ baseUrl }: CreateAxiosFnParams = {}): AxiosInstance => {
  return axios.create({
    baseURL: baseUrl || process.env.REACT_APP_API_BASE_URL,
  });
};

export default createAxios;
