import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
  state() {
    return {
      jobs: [],
    }
  },
})

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
