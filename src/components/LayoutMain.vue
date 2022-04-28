<template>
  <div class="main">
    <JobSearch />
    <JobListing />
  </div>
</template>

<script>
import JobSearch from "./JobSearch.vue";
import JobListing from "./JobListing.vue";

export default {
  name: "LayoutMain",
  components: {
    JobSearch,
    JobListing,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>