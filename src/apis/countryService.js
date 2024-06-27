import instance from './axios';

export async function loadCountries() {
  try {
    const response = await instance.get("/country");
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}

export async function loadCountry(id) {
  try {
    const response = await instance.get("/country/" + id); //country-detail
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}
