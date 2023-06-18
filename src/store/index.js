import { createStore } from 'vuex'

const state = {
  darkMode: false,
  jobs: [],
  showPagination: true,
  pageNum: 0,
  fulltimeOnly: false,
  keywords: '',
  location: '',
}

const getters = {
  allJobs: (state) => state.jobs,
  showPagination: (state) => state.showPagination,
  isDarkMode: (state) => state.darkMode,
}

const actions = {
  async modeCheck({ commit }) {
    if (localStorage.getItem('darkMode') !== 'false') {
      commit('setDarkMode', true)
      document.querySelector('body').classList.add('darkMode')
    }
  },
  async modeSwitch({ commit }, e) {
    commit('setDarkMode', e.target.checked)
    if (state.darkMode) {
      document.querySelector('body').classList.add('darkMode')
      localStorage.setItem('darkMode', true)
    } else {
      document.querySelector('body').classList.remove('darkMode')
      localStorage.setItem('darkMode', false)
    }
  },
  async fetchJobs({ commit }) {
    fetch(`${process.env.VUE_APP_DEVJOBS_SERVER}/jobs?_page=1&_limit=7&`)
      .then((res) => res.json())
      .then((data) => {
        commit('setJobs', data)
        commit('setShowPagination', data.length < 7 ? false : true)
        commit('setPageNum', 1)
        commit('setFulltimeOnly', false)
        commit('setFilterByKeywords', '')
        commit('setFilterByLocation', '')
      })
      .catch((err) => console.log(err.json))
  },
  async fetchMoreJobs({ commit }) {
    let paginatedURL = `${process.env.VUE_APP_DEVJOBS_SERVER}/jobs?_page=${
      state.pageNum + 1
    }&_limit=7&`
    if (state.fulltimeOnly) {
      paginatedURL += `contract=Full%20Time&`
    }
    if (state.keywords) {
      paginatedURL += `position_like=${encodeURIComponent(state.keywords)}&`
    }
    if (state.location) {
      paginatedURL += `location_like=${encodeURIComponent(state.location)}&`
    }
    fetch(paginatedURL)
      .then((res) => res.json())
      .then((data) => {
        commit('setJobs', state.jobs.concat(data))
        commit('setShowPagination', data.length < 7 ? false : true)
        commit('setPageNum', state.pageNum + 1)
      })
      .catch((err) => console.log(err.json))
  },
  async filterJobs({ commit, dispatch }) {
    let filterURL = `${process.env.VUE_APP_DEVJOBS_SERVER}/jobs?_page=1&_limit=7&`
    if (state.fulltimeOnly) {
      filterURL += `contract=Full%20Time&`
    }
    if (state.keywords) {
      filterURL += `position_like=${encodeURIComponent(state.keywords)}&`
    }
    if (state.location) {
      filterURL += `location_like=${encodeURIComponent(state.location)}&`
    }
    if (state.fulltimeOnly || state.keywords || state.location) {
      fetch(filterURL)
        .then((res) => res.json())
        .then((data) => {
          commit('setJobs', data)
        })
        .catch((err) => console.log(err.json))
    } else {
      dispatch('fetchJobs')
    }
  },
  async filterFulltimeJobs({ commit }, e) {
    commit('setFulltimeOnly', e.target.checked)
  },
  async filterByKeywords({ commit }, e) {
    commit('setFilterByKeywords', e.target.value)
  },
  async filterByLocation({ commit }, e) {
    commit('setFilterByLocation', e.target.value)
  },
}

const mutations = {
  setDarkMode: (state, darkMode) => (state.darkMode = darkMode),
  setJobs: (state, jobs) => (state.jobs = jobs),
  setShowPagination: (state, showPagination) =>
    (state.showPagination = showPagination),
  setPageNum: (state, pageNum) => (state.pageNum = pageNum),
  setFulltimeOnly: (state, fulltimeOnly) => (state.fulltimeOnly = fulltimeOnly),
  setFilterByKeywords: (state, keywords) => (state.keywords = keywords),
  setFilterByLocation: (state, location) => (state.location = location),
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
