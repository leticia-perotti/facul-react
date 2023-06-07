import axios from "axios";

const api = axios.create({
    baseURL: '  https://random-d.uk/api'
})

export default api;