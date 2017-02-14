import Vue from 'vue'
import Router from 'vue-router'
import Version from 'plugins/version'
import Hello from 'components/Hello'
import About from 'components/About'
import GitHub from 'components/GitHub'
import NotFound from 'components/NotFound'

Vue.use(Router)
Vue.use(Version)

export const mode = 'history'

export const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/github',
    name: 'GitHub',
    component: GitHub
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

export default new Router({
  mode,
  routes
})
