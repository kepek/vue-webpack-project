import Vue from 'vue'
import merge from 'lodash/merge'
import config from 'src/config'
import AppLayout from 'src/AppLayout'
import * as directives from 'src/directives'

const AppComponent = Vue.component('app-component', {
  directives,

  components: {
    AppLayout
  },

  data () {
    return merge({}, {
      head: config.head
    })
  },

  head: {
    title () {
      return this.head.title
    },
    meta () {
      return this.head.meta
    }
  }
})

export default function () {
  return merge({}, { extends: AppComponent }, ...arguments)
}
