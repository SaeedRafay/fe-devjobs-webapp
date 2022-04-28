<template>
  <div class="jobSearch">
    <input
      type="text"
      class="searchTerm"
      placeholder="Filter by title, companies, expertise..."
    />
    <input
      type="text"
      class="searchLocation"
      placeholder="Filter by location..."
    />
    <label class="searchFulltime"
      >Full Time Only
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "JobSearch",
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
}
#app .searchFulltime:hover input ~ .checkmark {
  background-color: rgba(25, 32, 45, 0.3);
}
#app .searchFulltime input:checked ~ .checkmark {
  background: url("../assets/icon-check.svg") no-repeat center center
    var(--color-primary-violet);
}
#app .jobSearch button {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>