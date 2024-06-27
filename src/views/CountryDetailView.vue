<template>
  <div id="StudentEdit">
    <header>
      <div>
        <button class="topButton" type="button" v-on:click="goList">X</button>
      </div>
    </header>
    <h1>{{ country.name }}</h1>
    <section>
      <h3>출입국 정보</h3>
      <div class="departure">
        <p>국가: {{ country.name }}</p>
        <p>특징: {{ country.character }}</p>
        <p>대중교통: {{ country.transportation }}</p>
      </div>
      <h3>관광 정보</h3>
      <div class="visit">
        <p>번호: {{ country.number }}</p>
        <p>사고: {{ country.accident }}</p>
      </div>

      <footer>
        <button class="bottomButton" type="button" v-on:click="goList">
          도시 보러가기
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import { loadCountry } from "../apis/countryService";
export default {
  name: "CountryDetailView",
  data() {
    return {
      country: {},
    };
  },
  async mounted() {
    const countryId = this.$route.params.countryId;
    this.country = await loadCountry(countryId);
  },
  methods: {
    goList() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.topButton {
  position: fixed;
  top: 0px;
  right: -10px;
}

h1 {
  text-align: center;
}
h3 {
  margin-left: 8px;
  margin-top: 60px;
}

select {
  padding: 6px;
  width: 150px;
}

section {
  width: 100%;
}

.departure,
.visit {
  background-color: rgb(231, 231, 231);
  border-radius: 20px;
  padding: 10px;
  margin: auto;
}
button {
  padding: 5px 20px;
  margin-right: 10px;
}
footer {
  text-align: center;
}

.bottomButton {
  margin: 50px auto;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: orange;
  color: white;
}
</style>
