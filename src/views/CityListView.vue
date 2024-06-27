<template>
    <div id="cityListView" class="container">
      <h2>도시 목록</h2>
      <div class="city-card" v-for="city in cities" :key="city.cityId" @click="goDetail(city.cityId)">
        <div class="city-image">
          <img :src="city.cityImage" alt="city.name">
        </div>
        <div class="city-info">
          <div class="city-country">일본</div>
          <div class="city-name">{{ city.name }}</div>
          <div class="city-description">전통과 현대의 조화, 대표 관광 도시</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { loadCities } from "../apis/cityService";
  
  export default {
    name: "CityListView",
    data() {
      return {
        cities: []
      };
    },
    async mounted() {
      const id = this.$route.params.id;
      this.cities = await loadCities(id);
    },
    methods: {
      goDetail(id) {
        this.$router.push("/city/" + id);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
    min-height: 100vh;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .city-card {
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .city-card:hover {
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
  }
  
  .city-image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
  }
  
  .city-info {
    flex-grow: 1;
  }
  
  .city-country {
    font-size: 14px;
    color: #666;
  }
  
  .city-name {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .city-description {
    font-size: 16px;
    color: #777;
  }
  </style>
  