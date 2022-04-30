<template>
  <div>{{ job.position }}</div>
</template>

<script>
export default {
  name: "JobDetail",
  props: {
    jobId: Number,
  },
  data() {
    return {
      job: this.$store.state.jobs.find((job) => job.id == this.jobId),
    };
  },
};
</script>

<style>
</style>