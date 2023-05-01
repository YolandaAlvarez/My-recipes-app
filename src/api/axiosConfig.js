import axios from 'axios';
import url from '../.env.local';

export default axios.create({
    //baseURL:'http://localhost:8081',
    baseURL: process.env.SERVER_URL,
    headers: {"ngrok-skip-browser-warning": "true"}
});