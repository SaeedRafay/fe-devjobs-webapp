<template>
  <div class="jobListing">
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    <button class="jobMore">Load More</button>
  </div>
</template>

<script>
import JobCard from "./JobCard.vue";
import data from "../../data.json";

export default {
  name: "JobListing",
  components: {
    JobCard,
  },
  data() {
    return {
      jobs: data,
    };
  },
};
</script>

<style scoped>
#app .jobListing {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  margin: 0 0 130px;
}
#app .jobMore {
  grid-column: span 3;
  margin: 26px auto 0px;
}
</style>