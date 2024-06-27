<template>
    <div id="CityDetail">
      <div class="city-header">
        <img :src="basic.cityImage" alt="city.name" class="city-image">
        <div class="city-header-text">
          <h1 class="city-name">{{ basic.name }}</h1>
          <p class="city-description">{{ basic.info }}</p>
        </div>
      </div>
  
      <div class="blogs-section">
        <h2>📝 네이버 블로그</h2>
        <div v-for="blog in blogs" :key="blog.title" class="blog-card" @click="goBlog(blog.link)">
          <div class="blog-content">
            <p class="blog-title" v-html="blog.title"></p>
            <p class="blog-description" v-html="blog.description"></p>
            <p class="blogger-name">{{ blog.bloggername }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { loadCity, loadNaverBlog } from "../apis/cityService";
  
  export default {
    name: "CityDetailView",
    data() {
      return {
        basic: {},
        blogs: []
      };
    },
    async mounted() {
      const id = this.$route.params.id;
      this.basic = await loadCity(id);
      const query = this.basic.name;
      this.blogs = await loadNaverBlog(query);
    },
    methods: {
      goBlog(link) {
        window.location = link;
      }
    }
  }
  </script>
  
  <style scoped>
  #CityDetail {
    padding: 20px;
    font-family: 'Pretendard', sans-serif;
  }
  
  .city-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .city-image {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
  }
  
  .city-header-text {
    display: flex;
    flex-direction: column;
  }
  
  .city-country {
    font-size: 16px;
    color: #666;
  }
  
  .city-name {
    font-size: 28px;
    font-weight: bold;
    margin: 5px 0;
  }
  
  .city-description {
    font-size: 16px;
    color: #777;
  }
  
  .blogs-section {
    margin-top: 20px;
  }
  
  .blogs-section h2 {
    margin-bottom: 10px;
    color: #ff6f61;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
  }
  
  .blog-card {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 15px;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .blog-card:hover {
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  }
  
  .blog-content {
    display: flex;
    flex-direction: column;
  }
  
  .blog-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 5px;
  }
  
  .blog-description {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
  }
  
  .blogger-name {
    font-size: 12px;
    color: #999;
  }
  </style>
  