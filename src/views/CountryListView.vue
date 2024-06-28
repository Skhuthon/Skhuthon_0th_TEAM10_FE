<template>
  <div id="countryListView">
    <div ref="wordCloudContainer" class="word-cloud-container"></div>
    <h4>여행지 정보를 알아보아요</h4>
    <div class="country-container">
      <div
        v-for="country in countries"
        :key="country.countryId"
        @click="goEdit(country.countryId)"
        class="country-item"
      >
        <img :src="country.countryImage" alt="Country Image" />
        <div>{{ country.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadCloud, loadCountries } from "../apis/countryService";
import WordCloud from "wordcloud";

export default {
  name: "CountryListView",
  data() {
    return {
      countries: [],
      words: [],
    };
  },
  async mounted() {
    this.countries = await loadCountries();
    const cloudData = await loadCloud();
    this.words = cloudData.reviewsList;
    this.renderWordCloud();
  },
  methods: {
    // 워드 클라우드 값을 받아온 다음 배열에 있는 값을 하나씩 가져옴.
    renderWordCloud() {
      const wordList = this.words.map((word) => [word.text, word.value]);
      WordCloud(this.$refs.wordCloudContainer, {
        list: wordList,
        weightFactor: 10, // value에 곱해지는 인수, 값이 클수록 글씨가 커짐.
        minSize: 2, // 최소 글씨 크기
      });
    },
    goEdit(countryId) {
      this.$router.push("/country/" + countryId);
    },
  },
};
</script>

<style scoped>
img {
  width: 20px;
  border-radius: 5px;
}

h4 {
  text-align: center;
  background-color: rgb(255, 200, 98);
  border-radius: 10px;
  padding: 10px;
}

#countryListView {
  margin: auto;
  padding: 20px;
  width: 80%;
  right: 8px;
}

.word-cloud-container {
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 100%;
  margin: auto;
}

.country-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.country-item {
  flex: 0 1 calc(25% - 15px);
  border: 1px solid rgb(179, 175, 175);
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  font-size: 10px;
  padding: 5px;
}

.country-item:hover {
  background-color: #ddd;
  transform: translateY(-5px);
}
</style>
