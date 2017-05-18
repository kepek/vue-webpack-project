<template>
  <div id="lang-switcher">
    <select v-model="lang" @change="onSelect">
      <option v-for="locale in locales" :value=locale>{{ locale.value.name }}</option>
    </select>
  </div>
</template>

<script>
  import Vue from 'vue'

  const name = 'lang-switcher'

  export default {
    name,

    data () {
      return {
        lang: Vue.config.locales[Vue.config.lang],
        locales: Vue.config.locales
      }
    },

    beforeDestroy () {
      this.$bus.off(`${name}.lang.changed`, this.lang)
    },

    methods: {
      onSelect () {
        Vue.config.lang = this.lang
        this.$bus.on(`${name}.lang.changed`, this.lang)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
