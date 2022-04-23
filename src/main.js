import { createApp } from 'vue'
import { createStore } from 'vuex'

import data from '../data.json'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      jobs: data,
    }
  },
})

const app = createApp(App)

app.use(store)

app.mount('#app')
