// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Resource from 'vue-resource'
import AsyncComputed from 'vue-async-computed'
import Model from 'vue-model'
import Super from './plugins/Super'
import Version from './plugins/Version'
import router from './router'
import store from './store'

import App from './App'

const plugins = [
  Vuex,
  Super,
  Version,
  AsyncComputed,
  Model,
  Resource
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
