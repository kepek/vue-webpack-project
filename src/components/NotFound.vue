<template>
  <app-layout id="app-layout">
    <h2>{{ message }}</h2>
  </app-layout>
</template>

<script>
  import AppComponent from 'src/AppComponent'

  export default AppComponent({
    name: 'not-found',
    data () {
      return {
        message: 'Error 404 - Not Found'
      }
    }
  })
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
