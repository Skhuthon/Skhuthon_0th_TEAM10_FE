<template>
  <div id="header">
    <div id="toHome" @click="goHome">
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <span class="title">TC</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#toHome {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

#header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #4b4747;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>