// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueBus from 'vue-bus'
import VueResource from 'vue-resource'
import VueAsyncComputed from 'vue-async-computed'
import VueModel from 'vue-model'
import Super from 'src/plugins/Super'
import Version from 'src/plugins/Version'
import router from 'src/router'
import store from 'src/store'

import App from 'src/App'

const plugins = [
  Vuex,
  VueBus,
  VueResource,
  VueAsyncComputed,
  VueModel,
  Super,
  Version
]

plugins.forEach((plugin) => {
  Vue.use(plugin)
})

/* eslint-disable no-new */
const root = new Vue({
  template: '<App/>',
  components: {App},
  router,
  store
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})

export default root
