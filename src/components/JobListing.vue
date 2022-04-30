<template>
  <JobSearch />
  <div class="jobListing">
    <JobCard
      v-for="job in jobs"
      :key="job.id"
      :job="job"
      @click="$router.push('/job/' + job.id)"
    />
    <button class="jobMore">Load More</button>
  </div>
</template>

<script>
import JobSearch from "./JobSearch.vue";
import JobCard from "./JobCard.vue";

export default {
  name: "JobListing",
  components: {
    JobSearch,
    JobCard,
  },
  data() {
    return {
      jobs: this.$store.state.jobs,
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