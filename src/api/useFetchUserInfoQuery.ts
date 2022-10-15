import { useQuery } from "@tanstack/react-query";
import createAxios from "../utils/createAxios";

const PATH = "/users/info";

type ResponseData = {
  name: string;
};

const fetchUserInfoApi = async (): Promise<ResponseData> => {
  const api = createAxios();
  const { data } = await api.get(PATH);
  return data;
};

const useFetchUserInfoQuery = () => {
  return useQuery([PATH], fetchUserInfoApi);
};

export default useFetchUserInfoQuery;
