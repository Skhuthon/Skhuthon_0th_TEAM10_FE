<template>
  <div id="countryListView">
    <h1>학생 목록</h1>
    <div class="country-container">
      <div
        v-for="country in countries"
        v-bind:key="country.id"
        v-on:click="goEdit(country.id)"
        class="country-item"
      >
        {{ country.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { loadCountries } from "../countryService";
export default {
  name: "CountryListView",
  data() {
    return {
      countries: [],
    };
  },
  async mounted() {
    this.countries = await loadCountries();
  },
  methods: {
    goEdit(id) {
      this.$router.push("/country/" + id);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
#countryListView {
  margin: auto;
  padding: 20px;
  width: fit-content;
}

.country-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.country-item {
  flex: 0 1 calc(25% - 15px);
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  font-size: 10px;
  padding: 5px;
}

.country-item:hover {
  background-color: #ddd;
  transform: translateY(-5px);
}
</style>
