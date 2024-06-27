import instance from './axios';

export async function getAccessToken(code) {
    try {
        const response = await instance.post("/api/oauth2/callback/google", code);
        return response.data;
    } catch(error) {
        alert('로그인 에러: ' + (error instanceof Error ? error.message : error));
    }
}