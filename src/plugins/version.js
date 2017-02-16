import {version} from '../../package.json'

const VersionPlugin = {}

VersionPlugin.install = function (Vue, options) {
  Object.defineProperties(Vue.prototype, {
    '$version': {
      value: `v${version || '0.0.0'}`,
      writable: false
    }
  })
}

export default VersionPlugin
