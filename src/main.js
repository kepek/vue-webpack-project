// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import VueBus from 'vue-bus'
import VueResource from 'vue-resource'
import VueAsyncComputed from 'vue-async-computed'
import VueModel from 'vue-model'
import VueHead from 'vue-head'
import Super from 'src/plugins/Super'
import Version from 'src/plugins/Version'
import router from 'src/router'
import store from 'src/store'
import locales from 'src/locales'
import config from 'src/config'
import App from 'src/App'

const plugins = [
  VueI18n,
  Vuex,
  VueBus,
  VueResource,
  VueAsyncComputed,
  VueModel,
  VueHead,
  Super,
  Version
]

plugins.forEach((plugin) => {
  Vue.use(plugin)
})

Vue.config.lang = config.lang
Vue.config.fallbackLang = config.lang
Vue.config.locales = locales

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang].value.locales)
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
