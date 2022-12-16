<template>
  <div class="jobSearch">
    <input
      type="text"
      class="searchTerm"
      placeholder="Filter by title, companies, expertise..."
      @blur="filterByKeywords"
    />
    <input
      type="text"
      class="searchLocation"
      placeholder="Filter by location..."
      @blur="filterByLocation"
    />
    <label class="searchFulltime"
      >Full Time Only
      <input type="checkbox" @change="filterFulltimeJobs" />
      <span class="checkmark"></span>
    </label>
    <button @click="filterJobs">Search</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "JobSearch",
  methods: {
    ...mapActions([
      "filterJobs",
      "filterFulltimeJobs",
      "filterByKeywords",
      "filterByLocation",
    ]),
    /* filterJobs() {
      console.log("filterButton");
      console.log(this.$store.state.jobs);
      this.$store.state.jobs = this.$store.state.jobs.filter(
        (job) => job.contract === "Full Time"
      );
    }, */
  },
};
</script>

<style scoped>
#app .jobSearch {
  width: 1110px;
  height: 80px;
  border-radius: 6px;
  background: var(--color-secondary-white);
  margin: 0 0 80px;
  position: relative;
}
body.darkMode #app .jobSearch {
  background: var(--color-primary-dark-blue);
}
#app .jobSearch input[type="text"] {
  border: 0;
  padding: 0;
  margin: 0;
  display: block;
  float: left;
  height: 80px;
  outline: none;
  font: var(--font-body) var(--font-family);
  color: var(--color-primary-dark-blue);
  border-right: 1px solid rgba(110, 128, 152, 0.2);
}
body.darkMode #app .jobSearch input[type="text"] {
  color: var(--color-secondary-white);
}
#app .jobSearch input[type="text"].searchTerm {
  margin: 0 0 0 32px;
  width: 390px;
  background: url("../assets/icon-search.svg") no-repeat left center;
  padding-left: 40px;
}
#app .jobSearch input[type="text"].searchLocation {
  margin: 0 0 0 22px;
  width: 244px;
  background: url("../assets/icon-location.svg") no-repeat left center;
  padding-left: 32px;
}
#app .searchFulltime {
  float: left;
  position: relative;
  padding-left: 40px;
  margin: 28px 0 0 32px;
  cursor: pointer;
  font: var(--font-button) var(--font-family);
  line-height: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#app .searchFulltime input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
#app .searchFulltime .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: rgba(25, 32, 45, 0.1);
  border-radius: 3px;
  transition: background-color 0.4s;
}
#app .searchFulltime:hover input ~ .checkmark {
  background-color: rgba(25, 32, 45, 0.3);
}
body.darkMode #app .searchFulltime .checkmark {
  background-color: rgba(255, 255, 255, 0.1);
}
body.darkMode #app .searchFulltime:hover input ~ .checkmark {
  background-color: rgba(255, 255, 255, 0.3);
}
#app .searchFulltime input:checked ~ .checkmark {
  background: url("../assets/icon-check.svg") no-repeat center center
    var(--color-primary-violet) !important;
}
#app .jobSearch button {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>