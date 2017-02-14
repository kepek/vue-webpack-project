<template>
  <div id="hello">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        message: 'Hello World Component!'
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
