import routes from './routes'
import Vue from 'vue'
import Router from 'vue-router'

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
