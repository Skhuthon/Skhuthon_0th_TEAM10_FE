<template>
  <div class="review-container">
    <h1>추천 명소 등록</h1>
    <form @submit.prevent="submitReview">
      <div class="input-container">
        <label>명소 이름</label>
        <input type="text" v-model="reviewData.placeName1" placeholder="이름을 입력해 주세요" required maxlength="50">
      </div>
      <div class="input-container">
        <label>명소 설명</label>
        <textarea v-model="reviewData.placeInfo1" placeholder="명소를 설명해 주세요" required maxlength="255"></textarea>
      </div>
      <div class="file-input-container">
        <label>명소 사진</label>
        <div class="file-hints">
          <p>(필수) 환경 파악 가능한 전경</p>
        </div>
        <p style="text-align: center">
          <img v-if="previewImage" :src="previewImage" alt="미리보기" class="image-preview">
        </p>
        <input type="file" @change="onFileChange" required>
      </div>
      <button type="submit" class="submit-button">명소 등록</button>
    </form>
  </div>
</template>

<script>
import { insertReview } from "@/apis/reviewService";

export default {
  name: "ReviewAddView",
  data() {
    return {
      reviewData: {
        placeName1: "",
        placeInfo1: ""
      },
      selectedFile: null,
      previewImage: null
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.previewImage = URL.createObjectURL(file);
      } else {
        this.selectedFile = null;
        this.previewImage = null;
      }
    },
    async submitReview() {
      const cityId = this.$route.params.id;
      if (this.reviewData.placeName1 && this.reviewData.placeInfo1 && this.selectedFile) {
        try {
          const response = await insertReview(cityId, this.reviewData, this.selectedFile);
          console.log('리뷰 등록 성공:', response);
          this.$router.push("/city/" + cityId);  // this.$router.push로 변경
        } catch (error) {
          console.error('리뷰 등록 실패:', error);
        }
      } else {
        alert('모든 필드를 채워주세요.');
      }
    }
  }
};
</script>

<style scoped>
.review-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

.input-container label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.input-container input,
.input-container textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-container textarea {
  min-height: 100px;
}

.file-input-container {
  margin-bottom: 20px;
}

.file-input-container label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.file-hints {
  font-size: 12px;
  color: orange;
  margin-bottom: 8px;
}

.file-input-container input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.image-preview {
  display: block;
  max-width: 100px;
  max-height: 100px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.submit-button:hover {
  background-color: #555;
}
</style>
