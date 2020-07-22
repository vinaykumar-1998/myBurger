import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-aa6aa.firebaseio.com/'
});

export default instance;