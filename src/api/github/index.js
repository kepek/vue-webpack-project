import Vue from 'vue'
import Resource from 'vue-resource'
import assign from 'lodash/assign'
import {utils} from 'src/api'

Vue.use(Resource)

export const resource = Vue.resource('https://api.github.com/repos{/username}{/repo}{/section}{?q*}')

export default {
  getCommits (params, modelName = 'commits') {
    return resource.get(assign(params, {section: modelName}))
      .then(response => utils.formatResponse(modelName, response))
  }
}
