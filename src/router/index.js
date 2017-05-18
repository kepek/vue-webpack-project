import Vue from 'vue'
import Router from 'vue-router'
import routes from 'src/router/routes'

const plugins = [
  Router
]

plugins.forEach((plugin) => {
  Vue.use(plugin)
})

const router = new Router({
  mode: 'history',
  routes
})

export default router
