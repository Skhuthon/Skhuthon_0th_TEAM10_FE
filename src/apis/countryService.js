import instance from "./axios";

export async function loadCountries() {
  try {
    const response = await instance.get("/country");
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}

export async function loadCountry(countryId) {
  try {
    const response = await instance.get("/country/" + countryId); //country-detail
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}

// 워드 클라우드 값을 받아오기 위한 함수
export async function loadCloud() {
  try {
    const response = await instance.get("/cloud");
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}
