<template>
  <div id="app-layout">
    <slot name="header">
      <app-header>
        <h1 slot="logo">
          <router-link to="/">
            <img src="./assets/logo.png">
          </router-link>
        </h1>
        <nav slot="menu">
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
      </app-header>
    </slot>
    <app-content>
      <slot></slot>
    </app-content>
    <slot name="footer">
      <app-footer></app-footer>
    </slot>
  </div>
</template>

<script>
  import AppHeader from 'src/AppHeader'
  import AppContent from 'src/AppContent'
  import AppFooter from 'src/AppFooter'

  export default {
    name: 'app-layout',

    components: {
      AppHeader,
      AppContent,
      AppFooter
    }
  }
</script>

<style lang="scss" scoped>
  #app-layout {
    padding: 60px 0;
  }
</style>
