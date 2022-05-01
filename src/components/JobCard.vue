<template>
  <div class="jobCard">
    <span class="jobLogo" :style="{ background: job.logoBackground }">
      <img :src="require('../assets/logos/' + job.logo)" />
    </span>
    <div class="jobInfo">
      {{ job.postedAt }}
      <span class="separator">&bull;</span>
      {{ job.contract }}
    </div>
    <h3>{{ job.position }}</h3>
    <div class="jobInfo">{{ job.company }}</div>
    <div class="jobLocation">{{ job.location }}</div>
  </div>
</template>

<script>
export default {
  props: {
    job: Object,
  },
};
</script>

<style scoped>
#app .jobListing .jobCard {
  margin: 25px 0 0;
  padding: 45px 32px 30px;
  background: var(--color-secondary-white);
  border-radius: 6px;
  position: relative;
  cursor: pointer;
}
body.darkMode #app .jobListing .jobCard {
  background: var(--color-primary-dark-blue);
}
#app .jobListing .jobCard:hover h3 {
  color: var(--color-secondary-dark-grey);
}
#app .jobCard .jobLogo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: 32px;
  background: var(--color-primary-midnight);
  border-radius: 15px;
}
#app .jobCard .jobLogo img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#app .jobCard .jobInfo {
  color: var(--color-secondary-dark-grey);
}
#app .jobCard .jobInfo .separator {
  margin: 0 5px;
  vertical-align: text-top;
  font-size: 24px;
  font-weight: 700;
}
#app .jobCard h3 {
  margin: 8px 0;
}
#app .jobCard .jobLocation {
  margin: 34px 0 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary-violet);
}
</style>