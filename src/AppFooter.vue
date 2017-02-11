<template>
  <div id="app-footer">
    <hr>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        msg: 'Footer'
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
