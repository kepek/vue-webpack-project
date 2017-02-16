import merge from 'lodash/merge'
import AppLayout from './AppLayout'
import * as directives from './directives'

const AppComponentMixin = {
  directives,

  components: {
    AppLayout
  },

  data () {
    return {
      $error: null,
      $loading: false,
      $version: this.$version
    }
  }
}

export default function () {
  return merge({}, AppComponentMixin, ...arguments)
}
