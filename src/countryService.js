import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"; //https://gcptest123.shop

export async function loadCountries() {
  try {
    const response = await axios.get("/country");
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}

export async function loadCountry(id) {
  try {
    const response = await axios.get("/country/" + id); //country-detail
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}
