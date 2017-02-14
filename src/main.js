// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'

/* eslint-disable no-new */
let root = new Vue({
  router,
  template: '<App/>',
  components: {App}
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
