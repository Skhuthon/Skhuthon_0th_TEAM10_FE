import axios from 'axios';
const baseURL = process.env.SERVER_BASE_URL;
const accessToken = localStorage.getItem('access_token') || '';

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            const { status } = error.response;
            if (status === 401 || status === 403) {
                alert("로그인이 필요합니다");
                window.location = '/login';
            }
        }
        return Promise.reject(error);
    }
)

export default instance;