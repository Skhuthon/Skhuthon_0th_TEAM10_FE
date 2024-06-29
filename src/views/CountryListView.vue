<template>
  <div id="countryListView">
    <div ref="wordCloudContainer" class="word-cloud-container"></div>
    <div class="logo-section">
      <h1 class="service-name">Travel Compass</h1>
      <button class="gpt-button" @click="refreshGpt">
        핫한 여행지는 어딜까? 클릭!
      </button>
      <div class="gpt-description" v-if="gpt.answer">{{ gpt.answer }}</div>
    </div>
    <div class="country-container">
      <div
        v-for="country in countries"
        :key="country.countryId"
        @click="goEdit(country.countryId)"
        class="country-item"
      >
        <div class="image-container">
          <img :src="country.countryImage" alt="Country Image" />
        </div>
        <div class="country-name">{{ country.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadCloud, loadCountries, loadGpt } from "../apis/countryService";
import WordCloud from "wordcloud";

export default {
  name: "CountryListView",
  data() {
    return {
      countries: [],
      words: [],
      gpt: {
        answer: "", // 초기값을 빈 문자열로 설정
      },
    };
  },
  async mounted() {
    this.countries = await loadCountries();
    const cloudData = await loadCloud();
    this.words = cloudData.reviewsList;
    this.renderWordCloud();
  },
  methods: {
    async refreshGpt() {
      const newGpt = await loadGpt();
      this.gpt.answer = newGpt.answer; // gpt.answer 값을 새로 불러와서 업데이트
    },
    renderWordCloud() {
      const wordList = this.words.map((word) => [word.text, word.value]);
      const canvas = this.$refs.wordCloudContainer;
      WordCloud(canvas, {
        list: wordList,
        weightFactor: 13, // 글자 크기 조정
        minSize: 5,
        fontFamily: "Pretendard",
        fontWeight: 900,
        color: "random-dark",
        backgroundColor: "#d9d6d6",
        rotateRatio: 0.5,
        shape: "circle", // 'circle' 모양을 사용합니다
        gridSize: 2, // gridSize를 작게 설정하여 촘촘하게
        drawOutOfBound: false,
      });
    },
    goEdit(countryId) {
      this.$router.push("/country/" + countryId);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 40px;
  color: #555;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

h4 {
  text-align: center;
  background-color: rgb(255, 200, 98);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  font-family: "Pretendard", sans-serif;
}

#countryListView {
  margin: auto;
  padding: 20px;
  width: 90%;
}

.logo-section {
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.logo {
  width: 35px;
  height: auto;
}

.service-name {
  font-size: 30px;
  font-family: "Pretendard", sans-serif;
  margin: 20px auto 50px auto;
}

.gpt-button {
  border: none;
  border-radius: 15px;
  padding: 20px;
  background: linear-gradient(45deg, #637be9, #f94b3098);
}

.gpt-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  border: none;
  cursor: pointer;
}

.gpt-description {
  margin: 20px auto auto auto;
  border: 3px solid radial-gradient(circle, #8cb8ff, #f9a598);
  border-radius: 15px;
  padding: 10px;
}

.word-cloud-container {
  width: 100%;
  height: 300px;
  border-radius: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.country-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}

.country-item {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.country-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.country-name {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  font-family: "Pretendard", sans-serif;
}
</style>
