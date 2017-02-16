import github from '../../api/github'
import * as types from '../mutations'

// initial state
const state = {
  commits: []
}

// getters
const getters = {
  commits: state => state.commits
}

// actions
const actions = {
  getCommits ({commit}, payload) {
    github.getCommits(payload, commits => {
      commit(types.RECEIVE_COMMITS, {commits})
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_COMMITS] (state, { commits }) {
    state.commits = commits
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
