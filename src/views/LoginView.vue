<template>
    <div id="login-view" class="container">
      <div class="logo-section">
        <img src="../assets/logo.png" alt="Travel Compass" class="logo">
      </div>
      <h1>Travel Compass</h1>
      <a @click.prevent="handleLogin" href="#">
        <img src="../assets/web_neutral_rd_SI.svg" alt="google login">
      </a>
    </div>
  </template>
  

<script>
export default {
  name: "LoginView",
  methods: {
    handleLogin() {
        window.location = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=354998291702-snqf3mnfo390ua8fi245fuao0pk00ut4.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oauth2/callback/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
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
  height: auto;
}

h1 {
  font-size: 24px;
  color: #555;
}
</style>
