import Vue from 'vue'
import Resource from 'vue-resource'
import assign from 'lodash/assign'

Vue.use(Resource)

function formatResponse (modelName, response) {
  return {
    [modelName]: response.body
  }
}

export const resource = Vue.resource('https://api.github.com/repos{/username}{/repo}{/section}{?q*}')

export default {
  getCommits (params, modelName = 'commits') {
    return resource.get(assign(params, {section: modelName}))
      .then(response => formatResponse(modelName, response))
  }
}
