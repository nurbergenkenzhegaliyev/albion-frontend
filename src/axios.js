import axios from "axios";

const instance = axios.create({
    baseURL: 'http://193.168.49.9:5000',
});

export default instance;