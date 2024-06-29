<template>
  <div id="CityDetail">
    <div class="city-header">
      <img :src="basic.cityImage" alt="city.name" class="city-image" />
      <div class="city-header-text">
        <h1 class="city-name">{{ basic.name }}</h1>
        <p class="city-description">{{ basic.info }}</p>
      </div>
    </div>
    <blockquote class="city-recommendation">
      {{ basic.recommendation }}
    </blockquote>

    <div class="reviews-section">
      <div class="reviews-header">
        <h2>📌 추천 명소</h2>
        <button
          class="add-review-button"
          @click="addReview(this.$route.params.id)"
        >
          등록하기
        </button>
      </div>
      <div
        v-for="review in reviews"
        :key="review.reviewId"
        class="review-card"
        @click="openModal(review)"
      >
        <h3 class="review-title">{{ truncateText(review.placeName1, 10) }}</h3>
        <img
          :src="review.placeImage1"
          alt="review.placeName1"
          class="review-image"
        />
      </div>
    </div>

    <div class="blogs-section">
      <h2>📝 네이버 블로그</h2>
      <div
        v-for="blog in blogs"
        :key="blog.title"
        class="blog-card"
        @click="goBlog(blog.link)"
      >
        <div class="blog-content">
          <p class="blog-title" v-html="blog.title"></p>
          <p class="blog-description" v-html="blog.description"></p>
          <p class="blogger-name">{{ blog.bloggername }}</p>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 class="title">{{ selectedReview.placeName1 }}</h2>
        <img
          :src="selectedReview.placeImage1"
          alt="selectedReview.placeName1"
          class="modal-image"
        />

        <div class="description-box">
          <div class="profile">
            <img
              class="profile-image"
              :src="selectedReview.pictureUrl"
              alt="selectedReview.placeName1"
            />
            <p>{{ selectedReview.userName }}</p>
          </div>
          <p class="description">{{ selectedReview.placeInfo1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadCity, loadNaverBlog } from "../apis/cityService";
import { loadReviews } from "../apis/reviewService";
import { checkLogin } from "../apis/authService";
import { getUserInfo } from "../apis/authService";

export default {
  name: "CityDetailView",
  data() {
    return {
      basic: {},
      blogs: [],
      reviews: [],
      showModal: false,
      selectedReview: {},
      userName: [],
      reviewsInfo: [],
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.basic = await loadCity(id);
    const query = this.basic.name;
    this.blogs = await loadNaverBlog(query);
    this.reviews = await loadReviews(id);
    this.userName = await getUserInfo();
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
    },
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    },
    openModal(review) {
      this.selectedReview = review;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
#CityDetail {
  padding: 20px;
  font-family: "Pretendard", sans-serif;
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
  border-left: 4px solid #ff6f61;
  background-color: #f9f9f9;
  font-style: italic;
}

.blogs-section,
.reviews-section {
  margin-top: 20px;
}

.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.title {
  border-top: red 5px solid;
  border-bottom: red 5px solid;
  border-radius: 5px;
  width: fit-content;
  margin: auto;
  padding: 10px 0px;
}

.description-box {
  border-radius: 10px;
  width: 70%;
  margin: 40px auto;
}

.description {
  background-color: #fff1ab;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 100%;
  line-height: 70px;
}

.blogs-section h2,
.reviews-section h2 {
  margin-bottom: 10px;
  color: #ff6f61;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
}

.blog-card,
.review-card {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 15px;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
}

.blog-card:hover,
.review-card:hover {
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
}

.blog-content,
.review-content {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.blog-title,
.review-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.review-image {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-top: 10px;
  object-fit: cover; /* 이미지가 요소를 덮도록 설정 */
}

.blogger-name {
  font-size: 12px;
  color: #999;
}

.add-review-button {
  display: inline-block;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-review-button:hover {
  background-color: #555;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  text-align: center;
  overflow-y: auto;
  max-height: 90%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-image {
  width: 70%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  margin-top: 30px;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center();
  background-color: #fbe9c6;
  margin-bottom: -16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.profile-image {
  margin: 5px 6px;
  width: 10%;
  height: 10%;
  border-radius: 50%;
}
</style>
