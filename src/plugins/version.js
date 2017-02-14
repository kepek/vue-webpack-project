import {version} from '../../package.json'

const VersionPlugin = {}

VersionPlugin.install = function (Vue, options) {
  Vue.prototype.$version = version || '0.0.0'
}

export default VersionPlugin
