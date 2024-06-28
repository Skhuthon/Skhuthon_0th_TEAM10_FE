<template>
  <div id="CountryDetail">
    <h1>🌍 {{ country.name }}</h1>
    <section>
      <h3>🚪 출입국 정보</h3>
      <div class="info-card">
        <p><strong>⭐ 특징:</strong> {{ country.character }}</p>
        <p><strong>🚌 대중교통:</strong> {{ country.transportation }}</p>
      </div>
      <h3>🗺️ 관광 정보</h3>
      <div class="info-card">
        <p><strong>🔢 번호:</strong> {{ country.number }}</p>
        <p><strong>⚠️ 사고:</strong> {{ country.accident }}</p>
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

<style scoped>
#CountryDetail {
  background-color: #f9f9f9;
  font-family: 'Pretendard', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #ff6f61;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.5rem;
  color: #ff6f61;
  margin-top: 40px;
  margin-bottom: 20px;
}

section {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
}

.info-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-card p {
  margin: 10px 0;
  color: #555;
  font-size: 1rem;
}

footer {
  text-align: center;
  margin-top: 40px;
}

.bottomButton {
  width: 100%;
  max-width: 300px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.bottomButton:hover {
  background-color: #555;
}
</style>
