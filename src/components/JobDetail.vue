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
        <h3>Requirements</h3>
        <p>{{ job.requirements.content }}</p>
        <ul>
          <li v-for="(item, index) in job.requirements.items" :key="index">
            {{ item }}
          </li>
        </ul>
        <h3>What You Will Do</h3>
        <p>{{ job.role.content }}</p>
        <ol>
          <li v-for="(item, index) in job.role.items" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="jobStickyFooter">
    <div class="jobDetail">
      <div>
        <h3>{{ job.position }}</h3>
        <p>{{ job.company }}</p>
      </div>
      <div>
        <button>Apply Now</button>
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
      job: this.jobId
        ? this.$store.state.jobs?.find((job) => job.id == this.jobId)
        : {},
    };
  },
  created() {
    if (!this.job) {
      fetch(`${process.env.VUE_APP_DEVJOBS_SERVER}/jobs?id=${this.jobId}`)
        .then((res) => res.json())
        .then((data) => {
          this.job = data[0];
        })
        .catch((err) => console.log(err.json));
    }
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
  padding: 48px 48px 18px;
  background: var(--color-secondary-white);
  border-radius: 6px;
  margin-bottom: 180px;
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
#app .jobDescription .jobText > h3 {
  margin: 10px 0 20px;
}
#app .jobDescription .jobText > p {
  margin: 10px 0 30px;
}
#app .jobDescription .jobText > ul,
#app .jobDescription .jobText > ol {
  margin: 10px 0 40px;
}
#app .jobStickyFooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--color-secondary-white);
}
#app .jobStickyFooter .jobDetail {
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
  padding: 26px 0;
}
body.darkMode #app .jobStickyFooter {
  background: var(--color-primary-dark-blue);
}
#app .jobDetail Button {
  float: right;
}
</style>