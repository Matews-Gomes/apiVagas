import axios from "axios";

//http://localhost:3000/api

const api = axios.create({
    baseURL: 'http://192.168.0.173:3000/api'
})

export default api