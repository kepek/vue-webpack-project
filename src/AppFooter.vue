<template>
  <div id="app-footer">
    <footer>
      <slot>
        <small>
          SPA powered by Vue.js / Copyright {{ year }} {{ author }} /  {{ $version }}
        </small>
      </slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',

    data () {
      return {
        author: '@kepek',
        year: new Date().getFullYear()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  footer {
    border-top: 1px solid #328f67;
    padding: 15px 0;
    margin: 15px 0;
  }
</style>
