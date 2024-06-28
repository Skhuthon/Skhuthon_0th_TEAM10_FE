<template>
    <div id="CityDetail">
      <div class="city-header">
        <img :src="basic.cityImage" alt="city.name" class="city-image">
        <div class="city-header-text">
          <h1 class="city-name">{{ basic.name }}</h1>
          <p class="city-description">{{ basic.info }}</p>
        </div>
      </div>
      <blockquote class="city-recommendation">{{ basic.recommendation }}</blockquote>
  
      <div class="reviews-section">
        <div class="reviews-header">
          <h2>📌 추천 명소</h2>
          <button class="add-review-button" @click="addReview(this.$route.params.id)">등록하기</button>
        </div>
        <div v-for="review in reviews" :key="review.reviewId" class="review-card">
          <div class="review-content">
            <h3 class="review-title" v-html="review.placeName1"></h3>
            <p class="review-description" v-html="review.placeInfo1"></p>
            <img :src="review.placeImage1" alt="review.placeName1" class="review-image">
          </div>
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
  import { loadReviews } from "../apis/reviewService";
  import { checkLogin } from "../apis/authService";
  
  export default {
    name: "CityDetailView",
    data() {
      return {
        basic: {},
        blogs: [],
        reviews: []
      };
    },
    async mounted() {
      const id = this.$route.params.id;
      this.basic = await loadCity(id);
      const query = this.basic.name;
      this.blogs = await loadNaverBlog(query);
      this.reviews = await loadReviews(id);
    },
    methods: {
      goBlog(link) {
        window.location = link;
      },
      addReview(id) {
        if (checkLogin()) {
          this.$router.push("/addReview/" + id);
        } else {
          alert("로그인이 필요한 서비스입니다.");
          this.$router.push("/login");
        }
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
  
  .city-name {
    font-size: 28px;
    font-weight: bold;
    margin: 5px 0;
  }
  
  .city-description {
    font-size: 16px;
    color: #777;
  }
  
  .city-recommendation {
    font-size: 16px;
    color: #555;
    margin: 10px;
    padding: 10px 20px;
    border-left: 4px solid #ff6f61; /* 인용문구 스타일 */
    background-color: #f9f9f9;
    font-style: italic;
  }
  
  .blogs-section, .reviews-section {
    margin-top: 20px;
  }
  
  .reviews-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .blogs-section h2, .reviews-section h2 {
    margin-bottom: 10px;
    color: #ff6f61;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
  }
  
  .blog-card, .review-card {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 15px;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .blog-card:hover, .review-card:hover {
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  }
  
  .blog-content, .review-content {
    display: flex;
    flex-direction: column;
  }
  
  .blog-title, .review-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 5px;
  }
  
  .blog-description, .review-description {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
  }
  
  .blogger-name {
    font-size: 12px;
    color: #999;
  }
  
  .review-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
  }
  
  .add-review-button {
    display: inline-block;
    padding: 8px 10px;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    background-color: #333; /* 옅은 검은색 버튼 */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .add-review-button:hover {
    background-color: #555; /* 호버 시 색상 변경 */
  }
  </style>
  