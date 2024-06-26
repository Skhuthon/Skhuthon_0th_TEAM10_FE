import axios from 'axios';

axios.defaults.baseURL = "https://gcptest123.shop";

export async function loadCountries() {
    try {
        const response = await axios.get("/country");
        return response.data;
    } catch(error) {
        alert('조회 에러: ' + (error instanceof Error ? error.message : error));
    }
}
