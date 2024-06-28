<template>
  <div id="header">
    <div id="toHome" @click="goHome">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <span class="title">TC</span>
    </div>
    <div class="user-info">
      <div v-if="loggedIn" class="profile">
        <img :src="loginData.pictureUrl" alt="Profile Picture" class="profile-picture">
        <span class="title2">{{ loginData.name }}</span>
      </div>
      <div v-if="!loggedIn">
        <span class="title login-link" @click="goLogin">Login</span>
      </div>
    </div>
  </div>
</template>

<script>
import { checkLogin, getUserInfo } from "../apis/authService";

export default {
  name: "HeaderComponent",
  data() {
    return {
      loggedIn: false,
      loginData: {},
    };
  },
  async mounted() {
    if (checkLogin()) {
      this.loggedIn = true;
      this.loginData = await getUserInfo();
    }
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 좌우로 정렬 */
  padding: 10px 20px;
  background-color: #4b4747;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#toHome {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.logo {
  width: 35px;
  margin-right: 6px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #d6d3d3;
}

.title2 {
  font-size: 15px;
  font-weight: bold;
  color: #d6d3d3;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%; /* 둥글게 만듦 */
  margin-right: 5px;
}

.login-link {
  cursor: pointer;
}
</style>
