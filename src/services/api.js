import axios from "axios";

const config = {
  baseURL: "https://rickandmortyapi.com/api/",
  timeout: 5000
}

const api = axios.create(config);


export default api;