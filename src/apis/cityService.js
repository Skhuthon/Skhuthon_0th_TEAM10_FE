import instance from './axios';

export async function loadCities(countryId) {
    try {
        const response = await instance.get("/citys/" + countryId);
        return response.data;
    } catch (error) {
        alert("도시 리스트 조회 에러: " + (error instanceof Error ? error.message : error));
    }
}

export async function loadCity(cityId) {
    try {
        const response = await instance.get("/city/" + cityId);
        return response.data;
    } catch (error) {
        alert("도시 정보 조회 에러: " + (error instanceof Error ? error.message : error));
    }
}

export async function loadNaverBlog(query) {
    try {
        const response = await instance.get("/open/naver/blog?query=" + query);
        return response.data.items;
    } catch (error) {
        alert("블로그 정보 조회 에러: " + (error instanceof Error ? error.message : error));
    }
}