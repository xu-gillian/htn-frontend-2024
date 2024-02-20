import axios from "axios";


// const configs = {
//     development: {
//         SERVER_URI: 'localhost:5000',
//     },
//     production: {
//         SERVER_URI: 'HEROKU_URI',
//     },
// };

// module.exports.config = configs[process.env.NODE_ENV]
export default axios.create({
    // baseURL: 'http://localhost:5001'
    baseURL: 'https://htn-frontend-2024-c6b6c898bb5d.herokuapp.com/'
});
