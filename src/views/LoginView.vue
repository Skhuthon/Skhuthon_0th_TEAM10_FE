<template>
  <div id="login-view" class="container">
    <div class="logo-section">
      <img src="../assets/logo.png" alt="Travel Compass" class="logo">
    </div>
    <h1>Travel Compass</h1>
    <a @click.prevent="handleLogin" href="#">
      <img src="../assets/google_signin.svg" alt="google login">
    </a>
  </div>
</template>


<script>
export default {
  name: "LoginView",
  methods: {
    handleLogin() {
      const googleAuthUrl = process.env.VUE_APP_GOOGLE_AUTH_URL;
      window.location = googleAuthUrl;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.logo-section {
  margin-bottom: 20px;
}

.logo {
  width: 150px; /* 로고의 크기를 조절합니다 */

}

h1 {
  font-size: 24px;
  color: #555;
}
</style>
