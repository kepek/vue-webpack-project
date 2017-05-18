import Vue from 'vue'
import Vuex from 'vuex'
import github from 'src/store/modules/github'
import createLogger from 'src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    github
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
