import github from '../../api/github'
import * as types from '../mutation-types'

// Initial state
const state = {
  commits: []
}

// Getters
const getters = {
  commits: state => state.commits
}

// Actions
const actions = {
  async getCommits ({commit}, payload) {
    commit(types.RECEIVE_COMMITS, await github.getCommits(payload))
    return Promise.resolve()
  }
}

// Mutations
const mutations = {
  [types.RECEIVE_COMMITS] (state, {commits}) {
    state.commits = commits
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
