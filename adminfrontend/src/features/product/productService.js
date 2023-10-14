import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/provider/`);

};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/provider/`, product, config);

  return response.data;
};

const getProductbyId = async (id) => {
  const response = await axios.get(`${base_url}product/provider/${id}`, config);

  return response.data;
};
const getaProduct =async(id)=>{
  const response = await axios.get(`${base_url}product/${id}`, config);
  return response.data;
};
const productService = {
  getProducts,
  createProduct,
  getProductbyId,
  getaProduct
};

export default productService;
