import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProviders = async () => {
  const response = await axios.get(`${base_url}user/all-providers`, config);
  return response.data;
  
};
const createProvider = async (provider) => {
  const response = await axios.post(`${base_url}user/add-provider`, provider , config);

  return response.data;
};

const providerService = {
  getProviders,
  createProvider,
};

export default providerService;
