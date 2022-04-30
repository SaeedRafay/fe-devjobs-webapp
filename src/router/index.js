import { createRouter, createWebHistory } from 'vue-router'
import JobListing from '../components/JobListing.vue'
import JobDetail from '../components/JobDetail.vue'

const routes = [
  {
    path: '',
    component: JobListing,
  },
  {
    path: '/job/:jobId',
    component: JobDetail,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
