<template>
  <div class="jobDetail">
    <div class="jobCompany">
      <div class="companyLogo" :style="{ background: job.logoBackground }">
        <img :src="require('../assets/logos/' + job.logo)" />
      </div>
      <div class="companyDetails">
        <h2>{{ job.company }}</h2>
        <p>{{ job.company }}.com</p>
      </div>
      <div class="companySite">
        <button class="btnSecondary">Company Site</button>
      </div>
    </div>
    <div class="jobDescription">
      <div class="jobHeader">
        <div>
          <div class="jobInfo">
            {{ job.postedAt }}
            <span class="separator">&bull;</span>
            {{ job.contract }}
          </div>
          <h1>{{ job.position }}</h1>
          <div class="jobLocation">{{ job.location }}</div>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>

      <div class="jobText">
        <p>{{ job.description }}</p>
      </div>
    </div>
  </div>
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

<style scoped>
#app .jobDetail {
  width: 730px;
  margin: 0 auto;
}
#app .jobDetail .jobCompany {
  border-radius: 6px;
  background: var(--color-secondary-white);
  height: 140px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  margin-bottom: 30px;
}
body.darkMode #app .jobDetail .jobCompany {
  background: var(--color-primary-dark-blue);
}
#app .jobDetail .companyLogo {
  width: 140px;
  position: relative;
}
#app .jobDetail .companyLogo img {
  transform: scale(2) translate(-50%, -50%);
  transform-origin: top left;
  position: absolute;
  top: 50%;
  left: 50%;
}
#app .jobDetail .companyDetails {
  align-self: center;
  margin-left: 40px;
}
#app .jobDetail .companySite {
  align-self: center;
  justify-self: end;
  margin-right: 40px;
}
#app .jobDetail .companyDetails p {
  margin-top: 10px;
  color: var(--color-secondary-dark-grey);
}
#app .jobDescription {
  padding: 48px;
  background: var(--color-secondary-white);
  border-radius: 6px;
}
body.darkMode #app .jobDescription {
  background: var(--color-primary-dark-blue);
}
#app .jobDescription .jobHeader {
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
}
#app .jobDescription .jobInfo {
  color: var(--color-secondary-dark-grey);
}
#app .jobDescription .jobInfo .separator {
  margin: 0 5px;
  vertical-align: text-top;
  font-size: 24px;
  font-weight: 700;
}
#app .jobDescription .jobLocation {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary-violet);
}
#app .jobDescription .jobText {
  margin-top: 30px;
  color: var(--color-secondary-dark-grey);
}
</style>