import instance from './axios';

export async function getAccessToken(code) {
    try {
        const response = await instance.get("/api/oauth2/callback/google?code=" + code);
        return response.data.accessToken;
    } catch(error) {
        alert('로그인 에러: ' + (error instanceof Error ? error.message : error));
    }
}

export function checkLogin() {
    try {
        const token = localStorage.getItem('access_token') || '';
        if (!token) {
            return false;
        }

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        const payload = JSON.parse(jsonPayload);
    
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp > currentTime;
    } catch (e) {
        console.error('Invalid token', e);
        return false;
    }
}

export async function getUserInfo() {
    try {
        const response = await instance.get("/user");
        return response.data
    } catch (error) {
        alert('로그인 에러: ' + (error instanceof Error ? error.message : error));
    }
}