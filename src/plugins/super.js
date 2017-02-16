const SuperPlugin = {}

function $super (type, self) {
  if (!(self instanceof type)) {
    throw new TypeError(`'${self}' not instance of '${type}'`)
  }

  const unbound = type.super.options.methods
  const bound = {}

  for (const key of Object.keys(unbound)) {
    bound[key] = unbound[key].bind(self)
  }

  return bound
}

SuperPlugin.install = function (Vue, options) {
  Object.defineProperties(Vue.prototype, {
    $super: {
      get: function () {
        // Just 'clone' the function so we don't overwrite properties across invocations.
        const local = $super.bind({})
        const methods = local(this.constructor, this)

        for (const key of Object.keys(methods)) {
          local[key] = methods[key].bind(this)
        }

        return local
      }
    }
  })
}

export default SuperPlugin
