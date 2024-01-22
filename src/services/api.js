import axios from "axios";

// 57084162/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;