import instance from './axios';

export async function loadReviews(cityId) {
    try {
        const response = await instance.get("/review/" + cityId);
        return response.data;
    } catch (error) {
        alert("도시 리뷰 리스트 조회 에러: " + (error instanceof Error ? error.message : error));
    }
}