import axios from "axios";

const Api = axios.create({
  baseURL: "https://awdiz-7/api/v1",
  
});

export default Api;
