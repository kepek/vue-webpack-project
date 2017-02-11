<template>
  <div id="app-header">
    <h1>{{ msg }}</h1>
    <router-link to="/">
      <img src="./assets/logo.png">
    </router-link>
    <hr>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>Hello</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/github">GitHub</router-link>
        </li>
        <li>
          <router-link to="/not-found">Not Found</router-link>
        </li>
      </ul>
    </nav>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        msg: 'Header'
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

  nav {
    .router-link-active {
      border-bottom: 1px solid #328f67;
    }
    
    a {
      text-decoration: none;
    }
  }
</style>
