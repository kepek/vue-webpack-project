import Vue from 'vue'

export const focus = {
  inserted (el) {
    el.focus()
  }
}

export default Vue.directive('focus', focus)
