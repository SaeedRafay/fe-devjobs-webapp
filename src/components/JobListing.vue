<template>
  <JobSearch />
  <div class="jobListing">
    <JobCard
      v-for="job in allJobs"
      :key="job.id"
      :job="job"
      @click="$router.push('/job/' + job.id)"
    />
    <button
      class="jobMore"
      v-if="showPagination"
      @click="fetchMoreJobs"
      :disabled="loadMoreDisabled"
    >
      Load More
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JobSearch from "./JobSearch.vue";
import JobCard from "./JobCard.vue";

export default {
  name: "JobListing",
  methods: {
    ...mapActions(["fetchJobs", "fetchMoreJobs"]),
  },
  components: {
    JobSearch,
    JobCard,
  },
  computed: mapGetters(["allJobs", "showPagination"]),
  created() {
    this.fetchJobs();
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
#app .jobMore:disabled {
  display: none;
}
</style>