<template>
    <div>
        <h1>Authenticating...</h1>
    </div>
</template>

<script>
import { getAccessToken } from '../apis/authService';

export default {
    name: "AuthCallback",
    async created() {
        const code = this.$route.query.code;
        console.log(code);
        if (code) {
            const accessToken = await getAccessToken(code);
            console.log(accessToken);
            localStorage.setItem('access_token', accessToken);
            this.$router.push('/');
        }
    }
}
</script>