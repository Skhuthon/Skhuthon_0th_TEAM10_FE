<template>
    <div>
        <h1>Authenticating...</h1>
    </div>
</template>

<script>
import { getAccessToken } from '../apis/authService'; 

export default {
    name: "AuthCallback",
    created() {
        const code = this.$route.query.code;
        if (code) {
            const accessToken = getAccessToken(code).accessToken;
            localStorage.setItem('access_token', accessToken);
            this.$router.push('/');
        }
    }
}
</script>