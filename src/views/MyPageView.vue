<template>
  <div>
    <h1>마이페이지</h1>
    <div class="welcome">
      <img
        :src="userInfo.pictureUrl"
        class="welcome-image"
        alt="User Picture"
      />
      <div class="welcome-right">
        <h3 class="welcome-right-name">{{ userInfo.name }}님, 반갑습니다.</h3>
        <p>{{ userInfo.email }}</p>
      </div>
    </div>
    <section>
      <h4>내가 올린 글</h4>
    </section>
  </div>
</template>

<script>
import { getUserInfo } from "../apis/authService";

export default {
  name: "MyPageView",
  data() {
    return {
      userInfo: {},
      userReview: [],
    };
  },
  async mounted() {
    this.userInfo = await getUserInfo();
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.welcome {
  display: flex;
  border-top: 4px solid rgb(201, 200, 200);
  border-bottom: 4px solid rgb(201, 200, 200);
  justify-content: space-evenly;
  border-radius: 10px;
  width: 90%;
  margin: auto;
}

.welcome-image {
  width: 20%;
  height: 20%;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 17px;
  margin-left: 5px;
}

.welcome-right {
  margin-bottom: 13px;
}

.welcome-right-name {
  margin-top: 27px;
  margin-bottom: -13px;
}

p {
  color: gray;
}

h4 {
  text-align: center;
}
</style>
