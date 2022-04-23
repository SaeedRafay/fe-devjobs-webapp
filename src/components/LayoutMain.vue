<template>
  <div class="main">
    <JobListing />
  </div>
</template>

<script>
import JobListing from "./JobListing.vue";

export default {
  name: "LayoutMain",
  components: {
    JobListing,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>