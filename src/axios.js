import axios from "axios";

const instance = axios.create({
    baseURL: 'https://albion-backend.onrender.com',
});

export default instance;