import instance from './axios';

export async function getAccessToken(code) {
    try {
        const response = await instance.get("/api/oauth2/callback/google?code=" + code);
        console.log(response.data);
        return response.data.accessToken;
    } catch(error) {
        alert('로그인 에러: ' + (error instanceof Error ? error.message : error));
    }
}