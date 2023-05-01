import axios from 'axios';

export default axios.create({
    //baseURL:'http://localhost:8081',
    baseURL: 'http://recipes-service.us-west-1.elasticbeanstalk.com/',
    headers: {"ngrok-skip-browser-warning": "true"}
});