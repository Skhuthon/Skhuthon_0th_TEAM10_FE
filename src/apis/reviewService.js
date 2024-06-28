import instance from './axios';

export async function loadReviews(cityId) {
    try {
        const response = await instance.get("/review/" + cityId);
        return response.data;
    } catch (error) {
        alert("도시 리뷰 리스트 조회 에러: " + (error instanceof Error ? error.message : error));
    }
}

export async function insertReview(cityId, reviewData, imageFile) {
    try {
        const formData = new FormData();
        formData.append('review', new Blob([JSON.stringify(reviewData)], { type: 'application/json' }));
        formData.append('image', imageFile);
        const response = await instance.post(`/review/${cityId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        alert("리뷰 삽입 에러: " + (error instanceof Error ? error.message : error));
    }
}