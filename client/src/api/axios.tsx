import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5001'
    // baseURL: 'https://htn-frontend-2024-c6b6c898bb5d.herokuapp.com/'
});
