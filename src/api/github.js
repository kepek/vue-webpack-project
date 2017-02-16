import Vue from 'vue'
import Resource from 'vue-resource'
import assign from 'lodash/assign'

Vue.use(Resource)

export const resource = Vue.resource('https://api.github.com/repos{/username}{/repo}{/section}{?q*}')

export default {
  getCommits (payload, cb) {
    resource.get(assign(payload, {section: 'commits'})).then(response => {
      cb(response.body)
    })
  }
}
