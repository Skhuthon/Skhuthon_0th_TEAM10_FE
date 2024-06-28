<template>
  <div id="StudentEdit">
    <header></header>
    <h1>{{ country.name }}</h1>
    <section>
      <h3>출입국 정보</h3>
      <div class="departure">
        <p><strong>국가:</strong> {{ country.name }}</p>
        <p><strong>특징:</strong> {{ country.character }}</p>
        <p><strong>대중교통:</strong> {{ country.transportation }}</p>
      </div>
      <h3>관광 정보</h3>
      <div class="visit">
        <p><strong>번호:</strong> {{ country.number }}</p>
        <p><strong>사고:</strong> {{ country.accident }}</p>
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
      const countryId = this.$route.params.countryId;
      this.$router.push("/cities/" + countryId);
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
h3 {
  margin-left: 30px;
  margin-top: 60px;
  color: red;
}

select {
  padding: 6px;
  width: 150px;
}

section {
  width: 100%;
  margin: -30px auto;
}

.departure,
.visit {
  background-color: rgb(231, 231, 231);
  border-radius: 20px;
  padding: 10px;
  margin: 1px 20px;
}
button {
  padding: 5px 20px;
  margin-right: 10px;
}
footer {
  text-align: center;
  margin: auto 20px;
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
