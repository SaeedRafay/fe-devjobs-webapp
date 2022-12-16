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
  /* data() {
    return {
      jobs: this.$store.state.jobs,
      loadMoreDisabled: false,
      page: 0,
      // jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs?_page=1&_limit=5")
      .then((res) => res.json())
      .then((data) => {
        this.$store.state.jobs = data;
        this.page++;
      })
      .catch((err) => console.log(err.json));
  },
  watch: {
    jobs(newJobs, oldJobs) {
      this.$store.state.jobs = oldJobs.concat(newJobs);
    },
  },
  methods: {
    loadMoreJobs() {
      fetch(
        "http://localhost:3000/jobs?_page=" +
          parseInt(this.page + 1) +
          "&_limit=5"
      )
        .then((res) => res.json())
        .then((data) => {
          this.$store.state.jobs = this.jobs.concat(data);
          this.page++;

          if (data.length < 5) {
            this.loadMoreDisabled = true;
          }
          if (data.length == 0) {
            console.log("No more jobs founds");
          }
        })
        .catch((err) => console.log(err.json));
    },
  }, */
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