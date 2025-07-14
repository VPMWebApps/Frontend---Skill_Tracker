import axios from 'axios';

// Create axios instance with base URL
const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

// Add request interceptor
instance.interceptors.request.use(
    (config) => {
        console.log('Making request to:', config.url);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor
instance.interceptors.response.use(
    (response) => {
        console.log('Response received:', response.data);
        return response;
    },
    (error) => {
        if (error.code === 'ECONNABORTED') {
            console.error('Request timeout');
            return Promise.reject({ 
                msg: 'Request timeout. The server is taking too long to respond.' 
            });
        }
        
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response error:', error.response.data);
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received. Is the server running?');
            return Promise.reject({ 
                msg: 'Cannot connect to server. Please make sure the server is running on port 5000.' 
            });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Request setup error:', error.message);
            return Promise.reject({ 
                msg: 'Error setting up request. Please try again.' 
            });
        }
    }
);

export default instance; 