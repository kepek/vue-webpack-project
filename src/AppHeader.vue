<template>
  <div id="app-header">
    <header>
      <slot></slot>
      <slot name="logo"></slot>
      <slot name="menu"></slot>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  header {
    border-bottom: 1px solid #328f67;
    padding: 15px 0;
    margin: 15px 0;
  }

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

  nav {

  .router-link-active {
    border-bottom: 1px solid #328f67;
  }

  a {
    text-decoration: none;
  }

  }
</style>
